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

    
    const areaData = {};
    
    areas.forEach((areaId) => {
        // -- Get area data
        const areaParties = AFAWatchpigeonParties.filter(party => party.areas.includes(areaId));
        const areaPartyIds = areaParties.map((party) => party.id)
        const areaArticles = AFAWatchpigeonArticles.filter(article => article.responses.find((response) => areaPartyIds.includes(response.party.id)));
        // -- Create output & calculation variables
        let pointsByParty = {};
        let maxScaleByParty = {};
        let partyArticleCount = {};
        const passToClientJs = [];
        const relatedArticles = [];

        // -- Calculate scores

        // do this for all articles, in case an organiastion has overlap between areas; all data has to be considered
        AFAWatchpigeonArticles.forEach((article) => {
            article.responses.forEach((response) => {
                const partyId = response.party.id;
                pointsByParty = addToObjectNumber(pointsByParty, partyId, response.score + 3) // +3 to normalize into positive values from 0-6
                maxScaleByParty = addToObjectNumber(maxScaleByParty, partyId, 3 + 3)  // Same as above
                partyArticleCount = addToObjectNumber(partyArticleCount, partyId, 1);
            });
        });

        // Convert from a possibly negative value to percentages to pass to client-side javascript
        for (let partyId in pointsByParty) {
            if (!areaPartyIds.includes(partyId)) continue;
            const partyMax = maxScaleByParty[partyId];
            const partyPoints = pointsByParty[partyId];
            const percentage = partyPoints/partyMax*100;
            const partyData = areaParties.find(party => party.id == partyId)
            partyData.percentage = percentage;

            passToClientJs.push(partyData);
        }

        areaData[areaId] = {
            //id: areaId,
            parties: areaParties,
            articles: areaArticles,
            passToClientJs
        }
    })

    return {
        areas: areas,
        watchpigeonData: areaData
    }
}
