async function loadBody(language,selection){
    let html;
    switch(selection){
        case 'cv':
            html = loadCv(language.cv);
            break;
        case 'projects':
            html = await loadProjects(language.projects);
            break;
        default:
            html = loadCv(language.cv);
    }
    let body = document.getElementById('body');
    body.innerHTML = html;
}
