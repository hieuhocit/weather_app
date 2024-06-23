export default function ({
  description,
  city,
  date,
  time,
  temperature,
  unit,
  imgUrl,
}) {
  return `
    <div class="weather-info">
      <p class="weather-info__description">${description}</p>
      <p class="weather-info__city">${city}</p>
      <p class="weather-info__date">${date}</p>
      <p class="weather-info__time">${time} pm</p>
      <p class="weather-info__temperature">${temperature} °${unit}</p>
      <button id="change-unit" class="weather-info__units btn" data-unit="${unit}">${unit === 'C' ? 'Display °F' : 'Display °C'}</button>
      <div class="weather-info__icon">
        <img src="${imgUrl}" alt="${description}"/>
      </div>
      <form class="search-box">
        <input type="text" name="location" placeholder="Search Location..." autocomplete="off"/>
        <button type="submit">🔍</button>
      </form>
    </div>
  `;
}