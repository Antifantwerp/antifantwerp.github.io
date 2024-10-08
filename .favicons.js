import fs from "fs";
import path from "path";
import { favicons } from "favicons";

async function write(response, property, outputDir) {
    Promise.all(
        response[property].map(
            async (file) => await fs.writeFile(path.join(outputDir, file.name), file.contents, ()=>{})
        )
    );
}

export default async function(eleventyDir) {
    const response = await favicons("src/assets/antifa.svg", {
        background: "#ff0000",
        theme_color: "#ff0000",
    });
    await fs.writeFile(path.join("src", "_includes", "favicons.pug"), response.html.join(""), ()=>{})
    await write(response, "images", eleventyDir.output);
    await write(response, "files", eleventyDir.output);
}

