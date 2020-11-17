import '../../node_modules/@splidejs/splide/dist/css/splide.min.css';
import '../styles/index.scss';

// import mainImage from '../assets/*.png';



import Splide from '@splidejs/splide';
new Splide('#splide', {
  type: 'loop',
  perPage: 2,
}).mount();

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
  require('../test.html');
}

console.log('webpack starterkit');
