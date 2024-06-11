async function loadBody(language,selection){
    let html;
    console.log(selection);
    switch(selection){
        case 'cv':
            html = loadCv(language.cv);
            break;
        case 'projects':
            console.log(language)
            html = await loadProjects(language.projects);
            break;
        default:
            html = loadCv(language.cv);
    }
    let body = document.getElementById('body');
    body.innerHTML = html;
}
