
const about = document.querySelector('#about');
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

















