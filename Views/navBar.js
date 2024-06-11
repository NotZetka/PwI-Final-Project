function loadNavBar(language) {
    const navBar = document.getElementById('navBar');
    navBar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <button class="nav-link" onClick = "changeSelection('cv')">CV</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" onClick = "changeSelection('projects')">${language.projects}</button>
                    </li>
                </ul>
            </div>

            <!-- Language Selector -->
            <div class="d-flex">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${language.language}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" onclick="loadContent('pl')">${language.polish}</a></li>
                            <li><a class="dropdown-item" onclick="loadContent('en')"">${language.english}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}