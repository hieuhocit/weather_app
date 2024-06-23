export default function ({
  iconUrl,
  label,
  data,
  unit
}) {
  return `
    <div class="weather-details">
      <div class="weather-details__icon">
        <img src="${iconUrl}" alt="${label} icon"/>
      </div>
      <div class="weather-details__info">
        <p class="weather-details__label">${label}</p>
        <p class="weather-details__data">${data} ${unit}</p>
      </div>
    </div>
  `;
}