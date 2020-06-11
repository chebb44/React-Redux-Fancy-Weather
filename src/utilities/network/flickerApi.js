const key = 'fffb85c806b2f4991b4b03ed1bfa3cd8';
const baseUrl =
  'https://www.flickr.com/services/rest/?method=flickr.photos.search';
const tagMode = '&tag_mode=any&format=json&nojsoncallback=1';

async function getPhoto(query) {
  try {
    const urlKey = `&api_key=${key}`;
    const urlQuery = `&text=${query}`;
    const url = baseUrl + urlKey + urlQuery + tagMode;
    const response = await fetch(url);
    const json = await response.json();
    const random = Math.floor(Math.random() * json.photos.photo.length);
    const photoData = json.photos.photo[random];
    const photoUrl = `https://farm${photoData.farm}.staticflickr.com/${photoData.server}/${photoData.id}_${photoData.secret}_b.jpg`;
    return photoUrl;
  } catch (error) {
    return './src/assets/background.jpg';
  }
}

export { getPhoto, key };
