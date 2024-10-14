import { readFileSync } from "fs";

/**
 * Watchpigeon is a weird bird. The data is based around
 * parties - who are active in certain areas - and articles.
 * However, parties are allowed to be active in multiple areas
 * And also, everything is displayed on a graph. Thus requiring a scale.
 * This data file calculates all that!
 */

// Eleventy global imports were not working
function getDataFile(root, dataDir, filename) {
    // dataDir has a trailing slash
    const dataPath = `${root}/${dataDir}${filename}.json`
    return JSON.parse(readFileSync(dataPath, {encoding: "utf-8"}))
}

// Util function
function addToObjectNumber(object, key, increaseWith) {
    if (!Object.hasOwn(object, key)) {
        object[key] = 0;
    }
    object[key] += increaseWith;
    return object;
}


export default function (configData) {
    // Get Eleventy dirs
    const root = configData.eleventy.env.root;
    const dataDir = configData.eleventy.directories.data;

    // Get data
    const AFAWatchpigeonParties = getDataFile(root, dataDir, "AFAWatchpigeonParties");
    const AFAWatchpigeonArticles = getDataFile(root, dataDir, "AFAWatchpigeonArticles");

    // Get individual areas
    const individualAreas = new Set();
    AFAWatchpigeonParties.forEach(party => party.areas.forEach(area => individualAreas.add(area)))
    const areas = Array.from(individualAreas);

    
    const watchpigeonData = {};
    
    areas.forEach((watchId) => {
        console.log("parsing " + watchId)
        

        const relevantParties = AFAWatchpigeonParties.filter(party => party.areas.includes(watchId));
        const relevantPartyIds = relevantParties.map((party) => party.id)
        const relevantArticles = AFAWatchpigeonArticles.filter(article => article.responses.find((response) => relevantPartyIds.includes(response.party.id)));
        let points = {};
        let maxScale = {};
        let involvedArticles = {};
        const percentages = [];
        const relatedArticles = [];
        // Filter out parties with no configuration
        //filterParties((party)=> {return party == null});


        // do this for all articles, in case an organiastion has overlap between areas; all data has to be considered
        AFAWatchpigeonArticles.forEach((article, articleId) => {
            article.responses.forEach((response) => {
                const partyId = response.party.id;
                points = addToObjectNumber(points, partyId, response.score + 3) // +3 to normalize into positive values from 0-6
                maxScale = addToObjectNumber(maxScale, partyId, 3 + 3)  // Same as above
                involvedArticles = addToObjectNumber(involvedArticles, partyId, 1);
            });
        });

        // Convert from a possibly negative value to percentages
        for (let partyId in points) {
            if (!relevantPartyIds.includes(partyId)) continue;
            const partyMax = maxScale[partyId];
            const partyPoints = points[partyId];
            const percentage = partyPoints/partyMax*100;
            const party = relevantParties.find(party => party.id == partyId)
            party.percentage = percentage;

            percentages.push(party);
        }

        watchpigeonData[watchId] = {
            id: watchId,
            relevantParties,
            relevantArticles,
            percentages
        }
    })

    return {
        areas: areas,
        watchpigeonData: watchpigeonData
    }
}
