
window.onload = function () {

    const scrollButton = document.querySelector(".scrollBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    }

    scrollButton.addEventListener("click", function () {
        topFunction();
    });

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
};

