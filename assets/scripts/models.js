// ..................................................................

const about = {
    "github": "https://github.com/Online13",
    "adresse": "Lot B52 Cite Ankany Sambatra Itaosy",
    "date de naissance": "13 juin 2001",
    "e-mail": "rratiarivelo@gmail.com",
    "numero": "034 13 133 73"
};

const div_about = document.querySelector('.about');

for (let item in about) {
    div_about.innerHTML += `<li>
        <h4>${item.toUpperCase()}</h4>
        <small class="value">${about[item]}</small>
    </li>`;
}

// ..................................................................


const langues = {
    "Français (niveau B2)": 80,
    "Anglais (niveau Terminal, ecrit)": 40
};

const div_langue = document.querySelector('.langue');

for (let description in langues) {
    div_langue.innerHTML += ` <div class="progress">
        <small class="description">
            ${description}
        </small>
        <div class="progress-bar">
            <div data-value="${langues[description]}"></div>
        </div>
    </div>`;
}

// ..................................................................

const hobbies = [
    "dessiner",
    "jeu d'echec",
    "jeux video",
    "rubiks cube"
];

const div_hobby = document.querySelector('.ci');

hobbies.forEach(value => {
    div_hobby.innerHTML += `<li>${value}</li>`
});

// ..................................................................

const cursus = {
    "2018 – 2019": "Deuxième année en Mathématiques Informatique à l’Université d’Antananarivo",
    "2017 – 2018": "Première année en Mathématiques Informatique à l’Université d’Antananarivo",
    "mars 2018": "Obtention du Diplôme d’Étude en Langue Française (DELF) niveau B2",
    "2016 – 2017": "Obtention du Baccalauréat série C"
};

const div_cursus = document.querySelector('.cursus');

for (let date in cursus) {
    div_cursus.innerHTML += `<li><small>${date}</small>
        <span>${cursus[date]}</span>
    </li>`;
}

// ..................................................................

const form = {
    "Janvier 2020": "initiation au réseau a la MISA"
};

const div_form = document.querySelector('.form');

for (let date in form) {
    div_form.innerHTML += ` <ul class="form">
        <li><small>${date}</small>
        <span>${form[date]}</span></li>
    </ul>`;
}

// ..................................................................

const comp = [
    "Création de programmes en C/C++",
    "Création de sites statiques avec HTML5 et CSS3 (autoformation)",
    "Ajout d’interaction avec l’utilisateur sur un site en utilisant Javascript (autoformation)",
    "Versionner mes projets avec Git (autoformation)",
    "Création d’interface utilisateur (UI) avec la bibliothèque ReactJS (autoformation)"
];

const div_comp = document.querySelector('.comp');

comp.forEach(item => {
    div_comp.innerHTML += `<li>${item}</li>`;
})