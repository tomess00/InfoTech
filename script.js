const navbar = document.querySelector('.navbar'),
   menuIcon = document.querySelector('.menu-toggle'),
   closeIcon = document.querySelector('.close-icon'),
   body = document.querySelector('body')


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

