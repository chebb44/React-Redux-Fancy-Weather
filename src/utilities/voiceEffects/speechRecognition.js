/* eslint-disable no-undef */
import store from "../../store";

function initRecognition(mode = 'start') {
  const langs = {
    ru: 'ru-Ru',
    en: 'en-US',
    by: 'be',
  };
  const state = store.getState();
  const { currentLanguage } = state.unitLang;

  const recognition = new webkitSpeechRecognition();
  if (mode === 'start') {
    recognition.lang = langs[currentLanguage];
    recognition.start();
    return new Promise((resolve) => {
      recognition.onresult = (event) => {
        recognition.stop();
        resolve(event.results[0][0].transcript);
      };
    });
  } else {
    recognition.stop();
  }
}

export { initRecognition };
