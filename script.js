let burger = document.querySelector('.burger');
let sidebar = document.querySelector('.sideBar');
let sideBarLogo = document.querySelector('.sideBarLogo');

burger.addEventListener("click", () => {
    sidebar.style.display = "flex";
    burger.style.display = 'none';
});

sideBarLogo.addEventListener("click", () => {
    sidebar.style.display = "none";
    burger.style.display = 'flex';
});



let stars = document.querySelectorAll('.star');
let triggers = document.querySelectorAll('.starTrigger');

triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
        let star = stars[index]; 
        star.src = star.src.includes("Star.png") ? "./img/Star-active.png" : "./img/Star.png";
    });
});


