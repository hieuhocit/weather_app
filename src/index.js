import './styles/style.css';
import App from './App';
import loadingSVG from './assets/icons/loading.svg';

const loading = document.querySelector('.loading');
const img = document.createElement('img');
img.src = loadingSVG;
loading.appendChild(img);

const app = document.querySelector('#app');
let lastIndexSlide = 0;

init('vietnam', 'C', null);

function init(query, unit, isDailyForecast) {
  App({ query, unit, isDailyForecast }).then((html) => {
    app.innerHTML = html;
    addEvents();
  });
}

function addEvents() {
  const form = document.querySelector('form.search-box');
  const changeUnitBtn = document.querySelector('#change-unit');
  const switchBtns = document.querySelectorAll('.change-forecast > button');
  const prevBtn = document.querySelector('#back');
  const nextBtn = document.querySelector('#forward');
  const navContainer = document.querySelector('.dots-container');

  navContainer.children[lastIndexSlide].classList.add('active');

  form.addEventListener('submit', changeLocation);
  changeUnitBtn.addEventListener('click', changeUnit);
  switchBtns.forEach((btn) => btn.addEventListener('click', changeForecast));

  nextBtn.addEventListener('click', nextForecast);
  prevBtn.addEventListener('click', prevForecast);

  navContainer.addEventListener('click', (e) => {
    if(!e.target.dataset.index) return;
    const currentIndexSlide = e.target.dataset.index;
    if(currentIndexSlide > lastIndexSlide) nextForecast(e,currentIndexSlide - lastIndexSlide);
    else prevForecast(e,lastIndexSlide - currentIndexSlide);
  });
}

function removeActive() {
  const navContainer = document.querySelector('.dots-container');
  [...navContainer.children].forEach(dot => dot.classList.remove('active'));
}

function prevForecast(e, times = 1) {
  const navContainer = document.querySelector('.dots-container');
  const forecastContainer = document.querySelector('.forecast-hourly-container');
  forecastContainer.scrollBy({
    left: -forecastContainer.offsetWidth * times,
    behavior: 'smooth',
  });
  if(lastIndexSlide === 0) return;
  removeActive();
  lastIndexSlide -= times;
  navContainer.children[lastIndexSlide].classList.add('active');
}

function nextForecast(e, times = 1) {
  const navContainer = document.querySelector('.dots-container');
  const forecastContainer = document.querySelector('.forecast-hourly-container');
  forecastContainer.scrollBy({
    left: forecastContainer.offsetWidth * times,
    behavior: 'smooth',
  });
  if(lastIndexSlide + 1 === navContainer.children.length) return;
  removeActive();
  lastIndexSlide += times;
  navContainer.children[lastIndexSlide].classList.add('active');
}

function changeForecast(e) {
  const isDaily = e.target.id === 'daily' ? true : false;
  init(null, null, isDaily);
  lastIndexSlide = 0;
}

function changeLocation(e) {
  e.preventDefault();
  if (e.target.location.value.trim() === '') return;
  init(e.target.location.value, null, true);
  lastIndexSlide = 0;
}

function changeUnit(e) {
  if (e.target.dataset.unit === 'C') {
    init(null, 'F', null);
  } else {
    init(null, 'C', null);
  }
}
