
parties = JSON.parse(parties); // passed in watchpigeon.pug
parties.sort((a,b) => {
    const aPercentage = a.percentage;
    const bPercentage = b.percentage;
    if (aPercentage > bPercentage) {
        return 1;
    } else if (aPercentage == bPercentage) {
        return 0;
    } else {
        return -1;
    }
})

// https://refreshless.com/nouislider/examples/#section-colored-connect

function createSliders() {
    const percentageValues = parties.map(party => party.percentage);
    console.log(percentageValues)
    const elem = document.getElementById("input-scale");
    noUiSlider.create(elem, {
        range: {
            min: 0,
            max: 100
        },
        start: percentageValues,
        connect: true,
    })

    const handles = document.querySelectorAll("#input-scale .noUi-handle");
    let highestChain = 0;
    handles.forEach((handle, i) => {
        const party = parties[i];
        
        const percentageValuesBeforeThis = percentageValues.slice(0, i);
        console.log(percentageValuesBeforeThis)
        console.log(percentageValuesBeforeThis.filter(value => value == party.percentage))
        const howManythOfThisValue = percentageValuesBeforeThis.filter(value => value == party.percentage).length;
        console.log(party.name, party.percentage, howManythOfThisValue)

        const img = document.createElement("img");
        img.setAttribute("src", "/assets/" + party.logo.filename_download)
        handle.appendChild(img)
        if (howManythOfThisValue == 0) {
            img.classList.add("top");
        } else {
            img.style.top = 40 + (100 * howManythOfThisValue) + "%";
            if (howManythOfThisValue > highestChain) {
                highestChain = howManythOfThisValue;
            }
        }
    });
    elem.style.marginBottom = highestChain * 50 + "px";

}
createSliders();

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