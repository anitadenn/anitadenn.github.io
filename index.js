
const about = document.querySelector('#about');
const navMenu = document.querySelector('#navMenu');
const menuIcon = document.querySelector('.menu-bar')
const closeMenu = document.querySelector('#navMenu .fa-xmark');
const links = document.querySelectorAll('.nav-links a');


menuIcon.addEventListener('click', () => {
    navMenu.classList.add('open-menu');
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('open-menu');
})

links.forEach(link => {
    link.addEventListener('click', (event) => {
        navMenu.classList.remove('open-menu');
    })
})







const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    })
})

observer.observe(about);



window.onload = function(){
    if(window.location.hash){
        window.scrollTo(0, 0);
        history.replaceState(null, null, '');
    }
}



const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    })
})

















