const apiKey = '&appid=6cf126df7bf9775b8e26a80f3a06028c';
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';

async function getWeatherFromApi(city, lang = 'en', units = 'metric') {
  const urlLang = `&lang=${lang}`;
  const urlUnits = `&units=${units}`;
  const url = baseUrl + city + urlLang + urlUnits + apiKey;
  let response;
  try {
    response = await fetch(url);
    if (!response.ok) return false;
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { getWeatherFromApi, apiKey };
