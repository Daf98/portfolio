// menu = displayedMenu
// menuItem = menuItem
// hamburger = hamburgerToggle

const displayedMenu = document.querySelector('.displayedMenu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburgerToggle = document.querySelector('.hamburgerToggle');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

function openMenuHam() {
  if (displayedMenu.classList.contains('openMenu')) {
    displayedMenu.classList.remove('openMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    displayedMenu.classList.add('openMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburgerToggle.addEventListener('click', openMenuHam);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', openMenuHam);
  },
);