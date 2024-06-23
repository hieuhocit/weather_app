export default function({
  day,
  temperatureHight,
  temperatureLow, 
  imgUrl, 
  imgDesc,
  unit
}) {
  return `
    <div class="forecast-daily">
      <p class="forecast-daily__day">${day}</p>
      <div class="forecast-daily__temperature">
        <p class="forecast-daily__temperature-hight">${temperatureHight} ${unit}</p>
        <p class="forecast-daily__temperature-low">${temperatureLow} ${unit}</p>
      </div>
      <div class="forecast-daily__icon">
        <img src="${imgUrl}" alt="${imgDesc}"/>
      </div>
    </div>
  `;
}