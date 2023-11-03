
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

tablinks.forEach((tablink, index) => {
    tablink.addEventListener("click", () => {
        tablinks.forEach((tl) => tl.classList.remove("active-link"));
        tabcontents.forEach((tc) => tc.classList.remove("active-tab"));
        tablink.classList.add("active-link");
        tabcontents[index].classList.add("active-tab");
    });
});

tablinks[0].classList.add("active-link");
tabcontents[0].classList.add("active-tab");
