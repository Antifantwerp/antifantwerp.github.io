import markdownit from "markdown-it";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";;

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("be");

const md = markdownit();

function dateStringToOtherDateString(dateString) {
    const date = dayjs(dateString).tz("Europe/Brussels");
    return date.format("DD MMMM YYYY, HH:mm (UTCZ)");
}

export const data = {
    layout: "base.pug",
    pagination: {
        "data": "AFABlog",
        "size": 1,
        "alias": "post"
    },
    permalink: (data) => `blog/${data.post.id}/index.html`,
    stylesheet: "/style/blogpost.css"
}

export function render(data) {
    const createdAt = dateStringToOtherDateString(data.post.date_created);
    const updatedAt = dateStringToOtherDateString(data.post.date_updated);

    const header = `<hgroup><h1><nav aria-label="breadcrumb"><ul><li><a href="/blog">Blog</a></li><li>${data.post.title}</li></ul></nav></h1><p>${data.post.description}</p></hgroup>`;
    const blockquote = `<blockquote>Published at: ${createdAt}<br>Last updated: ${updatedAt}</blockquote>`;
    const content = md.render(data.post.content);

    return `<main id="main"><article>${header}${blockquote}${content}</article></main>`;
}