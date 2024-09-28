const yaml = require("js-yaml");
const sass = require("sass");
const eleventySass = require("eleventy-sass");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

const favicons = require("./.favicons");


module.exports = function (eleventyConfig) {
    favicons({
        input: "src",
        output: "dist",
    });
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPlugin(eleventyAutoCacheBuster);

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy({
        "./node_modules/nouislider/dist/nouislider.min.js": "/vendor/nouislider.min.js",
        "./node_modules/nouislider/dist/nouislider.min.css": "/vendor/nouislider.min.css"
    });

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