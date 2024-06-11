async function loadProjects(language){
    let html = await fetch(`../Languages/projects.${language.language}.json`)
            .then(response => response.json())
            .then(data => {        
                let html = '<div id="projects">';
                data.forEach(x => {
                    let project = new Project(x.title, x.description, x.image, x.link);
                    html += project.generateHtml();
                })
                html += "</div>"
                return html
            })
    console.log(html);
    return html;
}
