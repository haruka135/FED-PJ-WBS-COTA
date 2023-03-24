document.addEventListener("DOMContentLoaded",function() {

    const ham = document.querySelector(".ham a");
    const hamspan = document.querySelectorAll(".ham a span");
    const hmenu = document.querySelector(".hidden-menu");

    ham.onclick = () => {
        hmenu.classList.add("on");
    }


});