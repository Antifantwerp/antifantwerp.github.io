const yaml = require("js-yaml");
const sass = require("sass");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            loadPaths: ["node_modules"]
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}