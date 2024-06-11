function loadCookies(language){
    const cookies = document.getElementById('cookiePopup');
    cookies.innerHTML = `
    <div class="cookie-popup">
        <p>${language.message}</p>
        <button id="acceptCookies">${language.accept}</button>
    </div>
    `
}


