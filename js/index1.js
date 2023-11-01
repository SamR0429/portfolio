

let sidemenu = document.querySelector(".side-menu");
let openMenuButton = document.querySelector(".openmenu");
let closeMenuButton = document.querySelector(".closemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Add click event listener to elements with the "openmenu" class
if (openMenuButton) {
    openMenuButton.addEventListener("click", openmenu);
}

// Add click event listener to elements with the "closemenu" class
if (closeMenuButton) {
    closeMenuButton.addEventListener("click", closemenu);
}
