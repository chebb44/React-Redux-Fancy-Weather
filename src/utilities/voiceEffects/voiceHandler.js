import store from "../../store";
import { initRecognition } from "./speechRecognition";
import { speakWeather } from "./speakWeather";
import { setIsRecognitionEnable, setSearchCity } from "../../reducers/searchData/searchDataActions";
import { setIsSpeaking } from "../../reducers/weather/weatherActions";

export const voiceHandler = async () => {
  const {recognitionIsEnable } = store.getState().searchData;
  if (recognitionIsEnable) {
    initRecognition('stop');
    store.dispatch(setIsRecognitionEnable(false));
  }
  else {
    store.dispatch(setIsRecognitionEnable(true));
    const voiceWord = await initRecognition();
    console.log('SearchForm -> onVoice -> voiceWord', voiceWord);
    const keyword = voiceWord.toLowerCase();
    if (keyword === 'weather' ||
      keyword === 'forecast' ||
      keyword === 'погода' ||
      keyword === 'прогноз') {
      speakWeather();
      store.dispatch(setIsSpeaking(true));
      store.dispatch(setIsRecognitionEnable(false));
      initRecognition('stop');
    }
    else {
      store.dispatch(setSearchCity(voiceWord));
      store.dispatch(setIsRecognitionEnable(false));
    }
  }
}