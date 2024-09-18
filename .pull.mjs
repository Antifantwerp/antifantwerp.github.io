import directusToData from "directus-to-data";

directusToData({
    collectionName: ["AFAStickers", "AFAStickerSources"],
    outputFilename: "src/_data/{{collectionName}}.json",
    configFilename: ".directus.json"
});