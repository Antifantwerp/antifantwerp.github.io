import { readFileSync } from "fs";

// Eleventy global imports were not working
function getDataFile(root, dataDir, filename) {
    // dataDir has a trailing slash
    const dataPath = `${root}/${dataDir}${filename}.json`
    return JSON.parse(readFileSync(dataPath, {encoding: "utf-8"}))

}

export default function (configData) {
    const root = configData.eleventy.env.root;
    const dataDir = configData.eleventy.directories.data;

    return {
        areas: ["flanders", "netherlands", "wallonie"]
    }
}
