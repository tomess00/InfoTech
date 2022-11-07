const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-toggle');
const closeIcon = document.querySelector('.close-icon');


// FONCTION QUI AFFICHE LA BARRE LATERALE
function displaySidebar() {
   menuIcon.addEventListener('click', () => {
      navbar.classList.add('nav-active');
      menuIcon.style.display = 'none';
   })

   closeIcon.addEventListener('click', () => {
      navbar.classList.remove('nav-active');
      menuIcon.style.display = 'block';
   })
}
displaySidebar();