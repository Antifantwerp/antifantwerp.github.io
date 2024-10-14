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
    const AFAWatchpigeonSubjects = getDataFile(root, dataDir, "AFAWatchpigeonArticles");

    // Get individual areas
    const individualAreas = new Set();
    AFAWatchpigeonParties.forEach(party => party.areas.forEach(area => individualAreas.add(area)))
    const areas = Array.from(individualAreas);

    
    const areaData = {};
    
    areas.forEach((areaId) => {
        // -- Get area data
        let areaParties = AFAWatchpigeonParties.filter(party => party.areas.includes(areaId));
        const areaPartyIds = areaParties.map((party) => party.id)
        const areaSubjects = new Set();
        const areaArticles =  [];  // Do not add values yet, see below
        
        // -- Create output & calculation variables
        let pointsByParty = {};
        let maxScaleByParty = {};
        let partyArticleCount = {};
        const passToClientJs = [];
        const relatedArticles = [];

        // -- Calculate scores

        // do this for all articles, in case an organiastion has overlap between areas; all data has to be considered
        AFAWatchpigeonArticles.forEach((article) => {
            let relevantForArea = false;
            //AFAWatchpigeonArticles.filter(article => article.responses.find((response) => );
            // Do the calculations for the percentages later
            article.responses.forEach((response) => {
                const partyId = response.party.id;

                pointsByParty = addToObjectNumber(pointsByParty, partyId, response.score + 3) // +3 to normalize into positive values from 0-6
                maxScaleByParty = addToObjectNumber(maxScaleByParty, partyId, 3 + 3)  // Same as above
                partyArticleCount = addToObjectNumber(partyArticleCount, partyId, 1);
                
                if (areaPartyIds.includes(partyId)) {
                    relevantForArea = true;
                }
            });

            if (relevantForArea) {
                const involvedPartyIds = article.responses.map(response => response.party.id)
                
                article.parties = AFAWatchpigeonParties.filter((party) => involvedPartyIds.includes(party.id));

                // I'm not going to lie, I'm not quite sure why this if statement ended up being necessary
                if (Object.keys(article.subjects[0]).includes("AFAWatchpigeonSubjects_id")) {
                    article.subjects = article.subjects.map(subject => subject.AFAWatchpigeonSubjects_id)                    
                }
                article.allTags = article.parties.map(party => party.id).concat(article.subjects.map(subject => subject.id)).join(",");

                article.subjects.forEach(subject => areaSubjects.add(subject));

                areaArticles.push(article);
            }
        });

        // Filter out areas without any relevant articles
        areaParties = areaParties.filter(party => Object.keys(pointsByParty).includes(party.id));

        // Convert from a possibly negative value to percentages to pass to client-side javascript
        areaParties.map((party) => {
            const partyId = party.id;
            const partyMax = maxScaleByParty[partyId];
            const partyPoints = pointsByParty[partyId];
            const percentage = partyPoints/partyMax*100;
            party.percentage = percentage;

            return party;
        })

        areaData[areaId] = {
            parties: areaParties,
            subjects: Array.from(areaSubjects),
            articles: areaArticles,
        }
    })

    return {
        areas: areas,
        watchpigeonData: areaData
    }
}
