
// for dark mode
const toggle = document.querySelectorAll(".icon-container");
const body = document.querySelector("body");
const nav_items = document.querySelector(".nav-items");
const footer = document.querySelector(".footer");

toggle.forEach(i => {
    i.addEventListener('click', () => {
        body.classList.toggle('dark');
        toggle.style.visibility = 'hidden';
    })
})



// for responsive
const nav_toggle = document.querySelector(".toggle");
const toggle_active = document.querySelector(".toggleActive");

nav_toggle.addEventListener('click', () =>{
        nav_items.classList.toggle('navisActive');
        nav_toggle.classList.toggle('toggleActive')
})
























































// for responsive
// const nav_toggle = document.querySelector(".toggle");
// const toggle_active = document.querySelector(".toggleActive");


// nav_toggle.addEventListener('click', () => {
//     nav_items.classList.toggle('navisActive');
//     nav_toggle.classList.toggle('toggleActive')

// })

// const nav_toggle = document.querySelector(".toggle");
// const toggle_active = document.querySelector(".toggleActive");

// nav_toggle.addEventListener('click', () => {
//     nav_items.classList.toggle('navisActive');
//     nav_toggle.classList.toggle('toggleActive'); 
// })

