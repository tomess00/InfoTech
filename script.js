const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-toggle');
const closeIcon = document.querySelector('.close-icon');
const body = document.querySelector('body');


// FONCTION QUI AFFICHE LA BARRE LATERALE
function displaySidebar() {
   menuIcon.addEventListener('click', () => {
      navbar.classList.add('nav-active');
      body.style.overflow = 'hidden';
   })

   closeIcon.addEventListener('click', () => {
      navbar.classList.remove('nav-active');
      menuIcon.style.display = 'block';
      body.style.overflow = 'visible';
   })
}
displaySidebar();

