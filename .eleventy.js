const yaml = require("js-yaml");
const sass = require("sass");
const eleventySass = require("eleventy-sass");

const favicons = require("./.favicons");


module.exports = function (eleventyConfig) {
    favicons({
        input: "src",
        output: "dist",
    });
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/scripts");

    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            loadPaths: ["node_modules", "node_modules/@picocss/pico/scss"]
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
        }
    }
}