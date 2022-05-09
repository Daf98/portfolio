//menu = displayedMenu
//menuItem = menuItem
//hamburger = hamburgerToggle

const displayedMenu = document.querySelector('displayedMenu');
const menuItems = document.querySelectorAll('menuItem');
const hamburgerToggle = document.querySelector('hamburgerToggle');
const menuIcon = document.querySelector('menuIcon');
const closeIcon = document.querySelector('closeIcon');

hamburgerToggle.addEventListener("click", function(){
if (displayedMenu.classList.contains("showMenu")) {
displayedMenu.classList.remove("showMenu");
closeIcon.style.display = "none";
menuIcon.style.display = "block";
} else {
    displayedMenu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
}
});