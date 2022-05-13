// Toggable hamburger menu

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

function clickLinks() {
  displayedMenu.classList.remove('openMenu');
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
}

hamburgerToggle.addEventListener('click', openMenuHam);

menuItems.forEach(
  (doesntExist) => {
    doesntExist.addEventListener('click', clickLinks);
  },
);

// Dynamic project cards and popup windows

const projects = [
  {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './css/Works/Preview.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn1',
    class: 'firstCard',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './css/Works/Preview.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn2',
    class: 'secondCard',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './css/Works/Preview.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn3',
    class: 'thirdCard',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './css/Works/Preview.png',
    technology: ['HTML', 'CSS'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn4',
    class: 'fourthCard',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './css/Works/Preview.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn5',
    class: 'fifthCard',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './css/Works/Preview.png',
    technology: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn6',
    class: 'sixthCard',
  },
];

// Created body
const body = document.querySelector('body');
// Created "cards" div
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Selected "About me" section
const aboutMe = document.querySelector('.aboutMe');
// Put "cards" div before "About me" section
body.insertBefore(cardDiv, aboutMe);

for (let i = 0; i < projects.length; i += 1) {
  const secondItem = document.createElement('div');
  secondItem.classList.add('secondItem');
  secondItem.classList.add(projects[i].class);
  cardDiv.appendChild(secondItem);

  secondItem.innerHTML = `
      <div class="descriptions">
      <div class="hidden">
      <h2 class="bigText">${projects[i].name}</h2>
      <p class="smallText">${projects[i].description}</p>
      <ul class="socials">
          <li class="boxes">${projects[i].technology[0]}</li>
          <li class="boxes">${projects[i].technology[1]}</li>
          <li class="boxes">${projects[i].technology[2]}</li>
      </ul>
      </div>  
  </div>
`;
  const regButton = document.createElement('button');
  regButton.type = 'button';
  regButton.classList.add('regButton');
  regButton.textContent = 'See Project';
  secondItem.appendChild(regButton);
}

document.querySelectorAll('.secondItem').forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.lastChild.classList.add('hiddenButton');
  });

  item.addEventListener('mouseleave', (e) => {
    e.target.lastChild.classList.remove('hiddenButton');
  });
});

const open = document.querySelectorAll('.regButton');
for (let i = 0; i < projects.length; i += 1) {
  open[i].addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.className = 'popupDesktop';
    popup.innerHTML = `
      <div class="popup">
      <div class="popupIntro">
        <h2 class="popupName">${projects[i].name}</h2>
        <button class="popupClose">&times;</button>
      </div>
        <ul class="popupButtons">
          <li class="listItemPopup">${projects[i].technology[0]}</li>
          <li class="listItemPopup">${projects[i].technology[1]}</li>
          <li class="listItemPopup">${projects[i].technology[2]}</li>
        </ul>
      <div class="flexPop">
      <img src=${projects[i].image} class="popupImg">
      <p class="popupDescription">${projects[i].description}</p>
      <div class="popupSources">
        <button class="popupLive"><a href="${projects[i].livelink}">See Live</a><img src="./css/icons/Live.png" alt=""></button>
        <button class="popupSource"><a href="${projects[i].livelink}">See Source</a><img src="./css/icons/GitHub-popup.png" alt=""></button>
      </div>
      </div>
    </div>
    <div id="blurry"></div>
      `;

    body.appendChild(popup);

    const close = document.querySelector('.popupClose');
    close.addEventListener('click', () => {
      body.removeChild(popup);
    });
  });
}

// Validate contact form

const form = document.querySelector('.actualForm');
const email = document.getElementById('mail');
const error = document.getElementById('error');

function validateEmail(event) {
  const message = [];
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.style.display = 'block';
    message.push('Email must be in lowercase');
    error.innerText = message.join(', ');
  } else {
    form.submit();
  }
}

form.addEventListener('submit', validateEmail);

// Local storage
const username = document.getElementById('username');
const mail = document.getElementById('mail');
const message = document.getElementById('message');
const formButton = document.getElementById('formButton');

function storeData() {
  const nameValue = username.value;
  const mailValue = mail.value;
  const messageValue = message.value;

  const user = {
    nameValue,
    mailValue,
    messageValue,
  };

  if (nameValue && mailValue && messageValue) {
    const stringedUser = JSON.stringify(user);
    localStorage.setItem('user', stringedUser);
  }
}
formButton.addEventListener('click', storeData);

username.addEventListener('keyup', storeData);
mail.addEventListener('keyup', storeData);
message.addEventListener('keyup', storeData);

// Pre-filled data

if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));
  username.value = user.nameValue;
  mail.value = user.mailValue;
  message.value = user.messageValue;
}
