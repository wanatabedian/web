
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
   
    navLinks.classList.toggle('active');
};


const allNavLinks = document.querySelectorAll('.nav-links li a');

allNavLinks.forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});