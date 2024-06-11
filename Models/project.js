class Project{
    constructor(title,description,image,link){
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }

    generateHtml(){
        return `
        <a href="${this.link}"><h2>${this.title}</h2></a>
        <div class="projects-text">${this.description}</div>
        <br></br>
        <img src = ${this.image} class="centered-image"
            onerror="this.onerror=null; this.src='./images/notfound.jpg';"></img>
        <br></br>
        
        `
    }
}