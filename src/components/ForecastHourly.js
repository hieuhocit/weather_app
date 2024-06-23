export default function ({
  time, 
  temperature, 
  imgUrl,
  imgDesc,
  unit
}) {
  const date = new Date(time);
  const currentTime = `${date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()} ${date.getHours() <= 12 ? 'am' : 'pm'}`;
  return `
    <div class="forecast-hourly">
      <p class="forecast-daily__day">${currentTime}</p>
      <div class="forecast-daily__temperature">
        <p class="forecast-daily__temperature-hight">${temperature} ${unit}</p>
      </div>
      <div class="forecast-daily__icon">
        <img src="${imgUrl}" alt="${imgDesc}"/>
      </div>
    </div>
  `;
}