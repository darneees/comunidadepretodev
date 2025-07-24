// menu mobile
document.addEventListener("DOMContentLoaded", function () {
    const mobileOpen = document.getElementById("menu-mobile-btn");
    const menuMobile = document.querySelector(".menu-mobile");

    mobileOpen.addEventListener("click", function () {
        menuMobile.classList.toggle("active");
    });
});