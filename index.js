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
    id: "btn1",
    class:"firstCard"
  },

 {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn2",
    class:"secondCard"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn3",
    class:"thirdCard"
  },

  {
    name: "Website Protfolio",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS"],
    livelink: "#",
    sourcelink: "#",
    id: "btn4",
    class:"fourthCard"
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript"],
    livelink: "#",
    sourcelink: "#",
    id: "btn5",
    class:"fifthCard"
  },

  {
    name: "Data Dashboard Healthcare",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./css/Works/preview.png",
    technology: ["HTML", "CSS", "Javascript", "Bootstrap"],
    livelink: "#",
    sourcelink: "#",
    id: "btn6",
    class:"sixthCard"
  }
];




const body = document.querySelector("body");
const cardDiv = document.createElement("div");
const secondPage = document.querySelector(".secondPage");
cardDiv.classList.add("cards");
const aboutMe = document.querySelector(".aboutMe");
body.insertBefore(cardDiv, aboutMe);


for (let i=0; i<projects.length; i++) {
/* const section = document.createElement("section"); */
/* section.classList.add("centeredDynamics"); */

const secondItem = document.createElement("div");
secondItem.classList.add("secondItem");
secondItem.classList.add(projects[i].class);
cardDiv.appendChild(secondItem);
/* body.insertBefore(section, aboutMe); */



secondItem.innerHTML = `
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
        <button class="popupLive"><a href="${projects[i].livelink}">See Live</a><img src="./css/icons/Live.png" alt=""></button>
        <button class="popupSource"><a href="${projects[i].livelink}">See Live</a><img src="./css/icons/GitHub-popup.png" alt=""></button>
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