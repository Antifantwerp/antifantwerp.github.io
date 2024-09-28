function setParam(key, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(key, value);
    window.location.search = urlParams;
    //history.pushState({}, "Selecting tag...", window.location.origin + "/" + urlParams.toString())
}

function getSelectedTags() {
    const urlParams = new URLSearchParams(window.location.search);
    try {
        return urlParams.get("tags").split(",");
    } catch {
        return [];
    }
}

function setSelectedTags(selectedTags) {
    setParam("tags", selectedTags.join(","));
}



function toggleTag(tagname) {
    const selectedTags = getSelectedTags();
    const selectedTagIndex = selectedTags.indexOf(tagname);
    if (selectedTagIndex > -1) {
        selectedTags.splice(selectedTagIndex, 1)
    } else {
        selectedTags.push(tagname)
    }
    setParam("tags", selectedTags)
}

function setupTagbuttons() {
    const btns = document.querySelectorAll(".tag")
    const selectedTags = getSelectedTags();
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", (e) => {
            toggleTag(e.target.value);
        });
        if (selectedTags.indexOf(btns[i].value) > -1) {
            btns[i].classList.add("selected")
        }
    }
}

function filterArticlesOnTags(filterOnTags) {
    const articles = document.querySelectorAll("#articles article");
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const articleTags = article.getAttribute("data-tags");
        let showArticle = true;

        for (let j = 0; j < filterOnTags.length; j++) {
            if (articleTags.indexOf(filterOnTags[j]) == -1) {
                showArticle = false;
                break;
            }
        }
        if (showArticle) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    }
}

setupTagbuttons();
filterArticlesOnTags(getSelectedTags())