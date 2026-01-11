const dropdownMenu = document.querySelector("#dropdownMenu");
const menuIcon = document.querySelector("#menu");
const list = document.querySelector(".toggle-list");

menuIcon.addEventListener("click", () => {
    menuToggle();
    menuIcon.classList.toggle("scale-105");
    list.addEventListener("click", () => {
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.add("hidden");
    })
})

function menuToggle(params) {
        dropdownMenu.classList.toggle("hidden");
        dropdownMenu.classList.toggle("flex");
}



//Projects Lists

const projectList = [

  {
    id: 5,
    title: "Maut AG",
    img: "build/img/maut.jpg",
    githubLink: "#",
    live: "https://maut-ag.com/",
    desc: "Entwicklung des Designs und der Struktur der Website. Layout – WordPress Elementor, CSS, JavaScript.",
  },
  {
    id: 11,
    title: "TechBob - News",
    img: "build/img/techbob.jpg",
    githubLink: "https://github.com/SerhiiBab/techbob",
    live: "https://www.techbob.de/",
    desc: "Entwicklung einer modernen Headless-CMS mit Next.js, TypeScript und Tailwind CSS für hohe Performance und Flexibilität.",
  },
  {
    id: 8,
    title: "Maus JS Spiel",
    img: "build/img/maus-spiel.jpg",
    githubLink: "https://github.com/SerhiiBab/maus-spiel",
    live: "https://maus-spiel.vercel.app/",
    desc: "Dieses Web-Spiel wurde vollständig mit Vanilla JavaScript, HTML und CSS entwickelt. Es bietet eine interaktive Spielerfahrung direkt im Browser, ohne externe Bibliotheken oder Frameworks.",
  },
];

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList){
    let displayProjects = projectsList.map(function(item){
        return `
        <div class="project-card" class="text-gray-300">
            <a href=${item.live} target="_blank"><img src= ${item.img} alt=${item.title}></a>
            <a href=${item.live} target="_blank"><h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1 underline underline-offset-8">${item.title}</h2></a>
            <p class="m-1 text-xs lg:text-base">${item.desc}</p>
            <div class="flex justify-between w-full px-4  projectLinkContainer items-center" >
              <a href=${item.live} target="_blank"><p class="text-sm lg:text-lg">Projekt ansehen -></p></a>
              <a href="${item.githubLink}" target="_blank"><img src="build/img/footer-github.png" alt="github-link""></a>
            </div>
            
        </div>`

    });
    displayProjects = displayProjects.join("");
    projectContainer.innerHTML = displayProjects;

}


window.addEventListener("DOMContentLoaded", function(){
    displayAllProjects(projectList);
})
