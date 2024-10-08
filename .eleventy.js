import yaml from "js-yaml";
import eleventySass from "@grimlink/eleventy-plugin-sass";
import eleventyAutoCacheBuster from "eleventy-auto-cache-buster";
import favicons from "./.favicons.js";
import * as sass from "sass";
import pugPlugin from "@11ty/eleventy-plugin-pug";


export default function (eleventyConfig) {
    eleventyConfig.addPlugin(pugPlugin);
    eleventyConfig.addPlugin(eleventySass, {
        sass,
        outputPath: "",
        includePaths: ["node_modules", "node_modules/@picocss/pico/scss"]
    });
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

    /*
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            loadPaths: ["node_modules", "node_modules/@picocss/pico/scss"]
        }
    });*/
}

export const config = {
    dir: {
        input: "src",
        output: "dist",
    }
};