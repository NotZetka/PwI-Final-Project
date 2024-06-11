function loadContent(newLanguage) {
    setCookie("language", newLanguage,7);
    language = newLanguage;
    fetch(`../Languages/language.${language}.json`)
        .then(response => response.json())
        .then(data => {
            loadCookies(data.cookies);
            loadNavBar(data.navBar);
            loadBody(data, selection)
        });
    };

function changeSelection(newSelection){
    setCookie("selection",newSelection,7)
    selection = newSelection;
    loadContent(language);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
let name = cname + "=";
let ca = document.cookie.split(';');
for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
}
return "";
}

function checkCookie() {
let user = getCookie("username");
if (user != "") {
    alert("Welcome again " + user);
} else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
    setCookie("username", user, 365);
    }
}
}

let language = getCookie('language');
if(language=="") {
    language = 'pl';
}
let selection = getCookie('selection');{
    if(selection=="") selection = 'cv';
}
loadContent(language);

document.addEventListener("DOMContentLoaded", function () {
    if (!getCookie("cookieConsent")) {
        document.getElementById("cookiePopup").style.display = "flex";
    }

    document.getElementById("acceptCookies").addEventListener("click", function () {
        setCookie("cookieConsent", "accepted", 30);
        document.getElementById("cookiePopup").style.display = "none";
    });
});