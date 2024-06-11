function loadContent(newLanguage) {
    language = newLanguage;
    fetch(`../Languages/language.${language}.json`)
        .then(response => response.json())
        .then(data => {
            loadNavBar(data.navBar);
            loadBody(data, selection)
        });
    };

function changeSelection(newSelection){
    selection = newSelection;
    loadContent(language);
}

let language = 'pl';
let selection = 'cv';
loadContent(language);