import markdownit from "markdown-it";
const md = markdownit();

export const data = {
    layout: "base.pug",
    pagination: {
        "data": "AFABlog",
        "size": 1,
        "alias": "post"
    },
    permalink: (data) => `blog/${data.post.id}/index.html`,
    title: (data) => `${data.post.title} - Antifantwerp`,
    description: (data) => data.post.description
}

export function render(data) {
    const header = `<hgroup><h1>${data.post.title}</h1><p>${data.post.description}</p></hgroup>`
    const content = md.render(data.post.content);
    return header + content;
}