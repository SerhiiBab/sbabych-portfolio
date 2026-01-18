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
    id: 11,
    title: "NutriKI",
    img: "build/img/nutriki.jpg",
    githubLink: "https://github.com/SerhiiBab/nutritrack.git",
    live: "https://nutriki.vercel.app/",
    desc: "Web-App zur Analyse von Mahlzeiten und Nährwerten per KI anhand von Texteingaben der Nutzer. <br /><strong>Technologien: React, TypeScript, Vite, Tailwind CSS, Google Gemini API, Node.js, Vercel.</strong>",
  },
  {
    id: 8,
    title: "UrbanStroll",
    img: "build/img/urbanstroll.jpg",
    githubLink: "https://github.com/SerhiiBab/urbanstroll.git",
    live: "https://urbanstroll.vercel.app/",
    desc: "Web-App zur Erstellung personalisierter Spazier- und Stadtrouten per KI nach Nutzerpräferenzen. <br /><strong>Technologien: React, TypeScript, Vite, Tailwind CSS, Google Gemini API, Node.js, Vercel.</strong>",
  },
  {
    id: 8,
    title: "TechFix",
    img: "build/img/texfix.jpg",
    githubLink: "https://github.com/SerhiiBab/techfix-pro.git",
    live: "https://techfixservice.vercel.app/",
    desc: "Web-Site zur Darstellung und Verwaltung von Reparatur- und Technikdiensten mit modernem UI und einfacher Bedienung. <br /><strong>Technologien: React, TypeScript, Vite, Tailwind CSS, Node.js, Vercel.</strong>",
  },

];

// function to return project-card
const projectContainer = document.getElementById("project-container");

function displayAllProjects(projectsList){
    let displayProjects = projectsList.map(function(item){
        return `
        <div class="project-card" class="text-gray-300">
            <a href=${item.live} target="_blank"><img src= ${item.img} alt=${item.title}></a>
            <a href=${item.live} target="_blank"><h2 class="text-xl lg:text-2xl  font-bold mx-3 pt-1">${item.title}</h2></a>
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
