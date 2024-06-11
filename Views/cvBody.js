function loadCv(language){
    return `
    <div class="container">
    <h2>${language.profile.title}</h2>
    ${language.profile.body}
    <br></br>
    
    <h2>${language.experience.title}</h2>
    <h3>${language.experience.company}</h3>
    <p>${language.experience.period}</p>
    <p>${language.experience.description}</p>
    <ul>
        ${language.experience.tasks.map(task => `<li>${task}</li>`).join('')}
    </ul>

    <h2>${language.education.title}</h2>
    <h3>${language.education.institution}</h3>
    <p>${language.education.period}</p>
    <p>${language.education.details}</p>

    <h2>${language.certificates.title}</h2>
    <ul>
        ${language.certificates.list.map(certificate => `<li>${certificate}</li>`).join('')}
    </ul>

    <h2>${language.skills.title}</h2>
    <ul>
        ${language.skills.list.map(skill => `<li>${skill}</li>`).join('')}
    </ul>

    <h2>${language.languages.title}</h2>
    <ul>
        <li>${language.languages.polish}</li>
        <li>${language.languages.english}</li>
    </ul>

    <h2>${language.websites.title}</h2>
    <ul>
        ${language.websites.list.map(website => `<li>${website}</li>`).join('')}
    </ul>
    </div>
    `
}