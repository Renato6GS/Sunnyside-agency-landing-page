const activeBars = document.getElementById('active-bars'),
   menu = document.getElementById('container-nav'),
   titleHeader = document.getElementById('title-header'),
   arrowHeader = document.getElementById('arrow-header');

activeBars.addEventListener('click', () => {
   menu.classList.toggle('menu-bar');
   titleHeader.classList.toggle('title-none');
   arrowHeader.classList.toggle('arrow-none');
});
