
const sidemenu = document.querySelector(".side-menu");
const openMenuButton = document.querySelector(".openmenu");
const closeMenuButton = document.querySelector(".closemenu");

function openmenu(event) {
    sidemenu.style.right = "0";
}

if (openMenuButton) {
    openMenuButton.addEventListener("click", openmenu);
}


function closemenu(event) {
    sidemenu.style.right = "-200px";
}

if (closeMenuButton) {
    closeMenuButton.addEventListener("click", closemenu);
}
