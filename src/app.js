function importAll(r) {
   return r.keys().map(r);
}
importAll(require.context('./static/img', false, /\.(png|jpe?g|svg)$/));
importAll(require.context('./static/img/desktop', false, /\.(png|jpe?g|svg)$/));

import './vendors/normalize/normalize.css';
import './styles/main.scss';

const activeBars = document.getElementById('active-bars'),
   menu = document.getElementById('container-nav'),
   titleHeader = document.getElementById('title-header'),
   arrowHeader = document.getElementById('arrow-header');

activeBars.addEventListener('click', () => {
   menu.classList.toggle('menu-bar');
   titleHeader.classList.toggle('title-none');
   arrowHeader.classList.toggle('arrow-none');
});
