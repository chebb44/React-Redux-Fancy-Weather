const token = '&key=7546d591ec49429298f6e5475923557c&pretty=1';

const baseUrl = 'https://api.opencagedata.com/geocode/v1/json?q=';
async function getGeoCode(city, lang = 'en') {
  const langUrl = `&language=${lang}`;
  const url = baseUrl + city + token + langUrl;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default getGeoCode;
