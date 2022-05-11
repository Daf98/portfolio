const displayedMenu = document.querySelector('.displayedMenu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburgerToggle = document.querySelector('.hamburgerToggle');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

function openMenuHam() {
  if (displayedMenu.classList.contains('openMenu')) {
    displayedMenu.classList.toggle('openMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    displayedMenu.classList.toggle('openMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburgerToggle.addEventListener('click', openMenuHam);

menuItems.forEach(
  (doesntExist) => {
    doesntExist.addEventListener('click', openMenuHam);
  },
);
const projects = [
  {
    name: "Multi-Post Stories",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn1"
  },

 {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn2"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn3"
  },

  {
    name: "Website Protfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS"],
    livelink: "#",
    sourcelink: "#",
    id: "btn4"
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn5"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn6"
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn7"
  }
];




const body = document.querySelector("body");

for (let i=0; i<projects.length; i++) {
const section = document.createElement("section");
const aboutMe = document.querySelector(".aboutMe");
body.insertBefore(section, aboutMe);



section.innerHTML = `
<div class="secondItem firstCard">
      <div class="descriptions">
      <h2 class="bigText">${projects[i].name}</h2>
      <p class="smallText">${projects[i].description}</p>
      <ul class="socials">
          <li class="boxes">${projects[i].technology[0]}</li>
          <li class="boxes">${projects[i].technology[1]}</li>
          <li class="boxes">${projects[i].technology[2]}</li>
      </ul>
  </div>
      <button type="button" class="regButton">See Project</button>
  </div>
`;
}

const open = document.querySelectorAll(".regButton");
for (let i=0; i<projects.length; i++) {
  open[i].addEventListener('click', ()=> {
      console.log("clicked");
      const main = document.createElement("div");
      main.className = "main";
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.innerHTML = `
      <div class="popup">
      <div class="popupIntro">
        <h2 class="popupName">${projects[i].name}</h2>
        <button class="popupClose">&times;</button>
      </div>
      <div class="popupButtons">
        <ul class="popupButtons">
          <li class="listItemPopup">${projects[i].technology[0]}</li>
          <li class="listItemPopup">${projects[i].technology[1]}</li>
          <li class="listItemPopup">${projects[i].technology[2]}</li>
        </ul>
      </div>
      <img src=${projects[i].image} class="popupImg">
      <p class="popupDescription">${projects[i].description}</p>
      <div class="popupSources">
        <button class="popupLive">See Live<img src=${projects[i].livelink} alt=""></button>
        <button class="popupSource">See Source<img src=${projects[i].sourcelink} alt=""></button>
      </div>
    </div>
    <div id="blurry"></div>
      `;
  
      main.appendChild(popup);
      body.appendChild(main);
  
      const close = document.querySelector(".popupClose");
      close.addEventListener("click", ()=> {
          console.log("closed");
          body.removeChild(main);
      });
  });
};