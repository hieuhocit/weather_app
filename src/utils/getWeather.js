async function getHistoryWeather({ currentDate, query }) {
  const startOfWeek = getStartOfWeek(currentDate);

  const distanceToNow =
    (currentDate.getDate() === 0 ? 7 : currentDate.getDate()) -
    (startOfWeek.getDate() === 0 ? 7 : startOfWeek.getDate());

  const histories = [];

  for (let i = 1; i <= distanceToNow; i++) {
    try {
      const dt = startOfWeek.toLocaleDateString();
      const url = `https://api.weatherapi.com/v1/history.json?key=f8377cc9b4694cdd9f632519241406&q=${query}&dt=${dt}`;
      const data = await getDataWeather(url);

      histories.push(data.forecast.forecastday[0]);
      startOfWeek.setDate(startOfWeek.getDate() + 1);
    } catch (err) {
      console.error(err);
    }
  }
  return histories;
}

async function getFutureWeather({ currentDate, query }) {
  // const endOfWeek = getEndOfWeek(currentDate);

  // const distanceToSunday =
  //   (endOfWeek.getDate() === 0 ? 7 : endOfWeek.getDate()) -
  //   (currentDate.getDate() === 0 ? 7 : currentDate.getDate());

  try {
    // const url = `https://api.weatherapi.com/v1/forecast.json?key=f8377cc9b4694cdd9f632519241406&q=${query}&days=${
    //   distanceToSunday + 1
    // }`;

    const url = `https://api.weatherapi.com/v1/forecast.json?key=f8377cc9b4694cdd9f632519241406&q=${query}&days=8`;

    const data = await getDataWeather(url);
    if (!data) throw new Error('Failed to get weather data');

    return data;
  } catch (err) {
    console.error(err);
  }
}

function getStartOfWeek(date) {
  let currentDate = new Date(date);
  let dayOfWeek = currentDate.getDay();
  let distanceToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  currentDate.setDate(currentDate.getDate() - distanceToMonday);
  return currentDate;
}

function getEndOfWeek(date) {
  let currentDate = new Date(date);
  let dayOfWeek = currentDate.getDay();
  let distanceToMonday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  currentDate.setDate(currentDate.getDate() + distanceToMonday);
  return currentDate;
}

async function getDataWeather(url) {
  try {
    const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if(!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  }catch(err){
    console.log(err);
  }
  return null;
}

export { getHistoryWeather, getFutureWeather };
