// APIs methods
import { getFutureWeather } from './utils/getWeather';

// Components
import WeatherInfo from './components/WeatherInfo';
import WeatherDetail from './components/WeatherDetail';
import ForecastDaily from './components/ForecastDaily';
import ForecastHourly from './components/ForecastHourly';

// Icons
import rainy from './assets/icons/rainy.svg';
import thermo from './assets/icons/thermo.svg';
import humidity from './assets/icons/humidity.svg';
import wind from './assets/icons/wind.svg';
import arrowLeft from './assets/icons/arrowleft.svg';
import arrowRight from './assets/icons/arrowright.svg';

function getNext24Hours(now, forecast) {
  const currentDate = new Date(now);
  const currentHour = currentDate.getHours();
  let next24Hours = [];
  
  let index = 0;
  if (currentHour + 1 <= 23) {
    next24Hours = [
      ...next24Hours,
      ...forecast[index].hour.slice(currentHour + 1),
    ];
  }

  if (next24Hours.length < 24) {
    index++;
    const nextDay = forecast[index];
    next24Hours = [
      ...next24Hours,
      ...nextDay.hour.slice(0, nextDay.hour.length - next24Hours.length),
    ];
  }
  return next24Hours;
}

let location;
let current;
let forecast; 
let next24Hours;
let next7Days;
let prevUnit;
let isDaily = true;
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default async function ({ query, unit, isDailyForecast }) {
  const loading = document.querySelector('.loading');
  loading.style.display = 'flex';

  if(isDailyForecast !== null) isDaily = isDailyForecast;

  if(unit) prevUnit = unit;
  else unit = prevUnit;

  console.log(query);

  try {
    if(query) {
      const data = await getFutureWeather({ query });
  
      if (!data) throw new Error('Some thing went wrong!');
  
      location = data.location;
      current = { ...data.current, ...data.forecast.forecastday[0] };
      forecast = data.forecast.forecastday; // 8 days including current and 7 next days
      next24Hours = getNext24Hours(new Date(), forecast);
      next7Days = data.forecast.forecastday.slice(1);
    }

    // console.log(current);
    // console.log(forecast);
    // console.log(location);
    // console.log(next24Hours);
    // console.log(next7Days);

    const dotsNav = new Array(((Math.trunc(next24Hours.length / 8)) + (next24Hours.length % 8)));
    dotsNav.fill(1);

    loading.style.display = 'none';

    return `
      <main class="main">
        ${WeatherInfo({
          description: current.condition.text,
          city: location.name + ', ' + location.country,
          date: new Date(location.localtime).toDateString(),
          time: new Date(location.localtime).getHours() + ':' + new Date(location.localtime).getMinutes(),
          temperature: unit === 'C' ? current.temp_c : current.temp_f,
          unit,
          imgUrl: current.condition.icon,
        })}
        <div class="weather-details-container">
          ${WeatherDetail({unit: `°${unit}`, iconUrl: thermo, label: 'Feels like', data: unit === 'C' ? current.feelslike_c : current.feelslike_f})}
          ${WeatherDetail({unit: '%', iconUrl: humidity, label: 'Humidity', data: current.humidity})}
          ${WeatherDetail({unit: '%', iconUrl: rainy, label: 'Chance of Rain', data: current.day.daily_chance_of_rain})}
          ${WeatherDetail({unit: unit === 'C' ? 'km/h' : 'mph', iconUrl: wind, label: 'Wind Speed', data: unit === 'C' ? current.wind_kph : current.wind_mph})}
        </div>
      </main>

      <div class="forecast">
        <div class="change-forecast">
          <button id="daily" type="button" class="btn ${isDaily && 'active' }">Daily</button>
          <button id="hourly" type="button" class="btn ${!isDaily && 'active' }">Hourly</button>
          <div class="nav ${!isDaily && 'active'}">
            <button id="back" type="button">
              <img src="${arrowLeft}"/>
            </button>
            <div class="dots-container">
              ${dotsNav.map((dot,index) => `<div data-index=${index} class="dot"></div>`).join('')}
            </div>
            <button id="forward" type="button">
              <img src="${arrowRight}"/>
            </button>
          </div>
        </div>

        <div class="forecast-hourly-container ${!isDaily && 'active' }">
          ${next24Hours.map((nextHour) => ForecastHourly({unit: `°${unit}`,time: nextHour.time, temperature: unit === 'C' ? nextHour.temp_c : nextHour.temp_f, imgUrl: nextHour.condition.icon, imgDesc: nextHour.condition.text})).join('')}
        </div>

        <div class="forecast-daily-container ${isDaily && 'active'}">
          ${next7Days.map(nextDay => {
            const date = new Date(nextDay.date);
            return ForecastDaily({unit: `°${unit}`,day: dayOfWeek[date.getDay()], temperatureHight: unit === 'C' ? nextDay.day.maxtemp_c : nextDay.day.maxtemp_f, temperatureLow: unit === 'C' ? nextDay.day.mintemp_c : nextDay.day.mintemp_f, imgUrl: nextDay.day.condition.icon, imgDesc: nextDay.day.condition.text})}
          ).join('')}
        </div>
      </div>
      `;
  } catch (err) {
    console.error(err);
  }
}
