import store from '../../store';
import { RECOGNITION_WATCHDOG_DELAY } from '../../constants/delayConstants';
import { setIsSpeaking } from '../../reducers/weather/weatherActions';


function speak() {
  console.log('speak weather func');
  const speakLang = {
    en: 'UK English Female',
    ru: 'Russian Female',
    by: 'Russian Female',
  };
  const state = store.getState();
  const { currentLanguage } = state.unitLang;
  const { currCity, currCountry } = state.location;
  const { todayWeather } = state.weather;
  const text = `${currCity}, 
  ${currCountry},
  ${todayWeather.todayTemp}, 
  ${todayWeather.currWeatherDescription},
  ${todayWeather.currFillLike}, 
  ${todayWeather.currWind}, 
  ${todayWeather.currHumidity}`;
  // eslint-disable-next-line no-undef
  responsiveVoice.speak(text, speakLang[currentLanguage], { rate: 0.8 });
  const watchDog = setInterval(() => {
    const { isSpeaking } = store.getState().weather;
    // eslint-disable-next-line no-undef
    if (!responsiveVoice.isPlaying() && isSpeaking) {
      store.dispatch(setIsSpeaking(false));
      clearInterval(watchDog);
    }
  }, RECOGNITION_WATCHDOG_DELAY);
}

export function speakWeather() {
  // eslint-disable-next-line no-undef
  if (responsiveVoice.isPlaying()) {
    store.dispatch(setIsSpeaking(false));
    // eslint-disable-next-line no-undef
    responsiveVoice.cancel();
  } else {
    store.dispatch(setIsSpeaking(true));
    speak();
  }
}