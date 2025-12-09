
const about = document.querySelector('#about');
const navMenu = document.querySelector('#navMenu');
const menuIcon = document.querySelector('.menu-bar')
const closeMenu = document.querySelector('#navMenu .fa-xmark');
const links = document.querySelectorAll('.nav-links a');



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        emailjs.sendForm('service_32rvfon','template_8sw16kb', this)
        .then(() => {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = 'green';
            form.reset();
        }, (err) => {
            formMessage.textContent= "Error sending Message. Try again!"
            formMessage.style.color = "red";
            console.error(err);
        });
    });

});



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



const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.fade-item');
      
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 200);
      });
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer1.observe(section);
});




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




const canvas = document.getElementById('hero-stars');
const ctx = canvas.getContext('2d');

let width = canvas.width = canvas.offsetWidth;
let height = canvas.height = canvas.offsetHeight;

const numStars = 150;  
const stars = [];

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animateStars() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach(s => {
    s.x += s.dx;
    s.y += s.dy;

    // wrap around edges
    if (s.x < 0) s.x = width;
    if (s.x > width) s.x = 0;
    if (s.y < 0) s.y = height;
    if (s.y > height) s.y = 0;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

animateStars();


window.addEventListener('resize', () => {
  width = canvas.width = canvas.offsetWidth;
  height = canvas.height = canvas.offsetHeight;
});








