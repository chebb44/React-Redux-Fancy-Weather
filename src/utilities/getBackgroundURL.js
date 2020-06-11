import { getPhoto } from './network/flickerApi';
import { FLICKER_RESPONSE_WAIT } from './../constants/delayConstants';
import { DEFAULT_BACKGROUND_URL } from './../constants/defaultUrlConstants';

export async function getBackgroundURL(currCity, timezoneOffset) {
  const photoUrl = await getPhoto(`${currCity}+${getYearPart(timezoneOffset)}+landscape`);
  const photo = new Image();
  photo.src = photoUrl;
  return new Promise((resolve, reject) => {
    photo.onload = () => {
      resolve(photoUrl);
    };
    setTimeout(() => {
      resolve(DEFAULT_BACKGROUND_URL);
    }, FLICKER_RESPONSE_WAIT);
  });
}

const MS_PER_SECOND = 1000;

function getYearPart(timezoneOffset) {
  const time = new Date(new Date().getTime() + timezoneOffset * MS_PER_SECOND);
  const MONTH = time.getUTCMonth();
  let output = '';

  if ((MONTH >= 0 && MONTH <= 1) || MONTH === 11) output += 'winter';
  if (MONTH >= 2 && MONTH <= 4) output += 'spring';
  if (MONTH >= 5 && MONTH <= 7) output += 'summer';
  if (MONTH >= 8 && MONTH <= 10) output += 'autumn';
  return output;
}
