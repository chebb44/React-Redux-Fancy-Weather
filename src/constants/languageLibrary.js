const days = {
  ru: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  en: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  by: [
    'Нядзеля',
    'Панядзелак',
    'Аўторак',
    'Серада',
    'Чацьвер',
    'Пятніца',
    'Сыбота',
  ],
};

const months = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  ru: [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ],
  by: [
    'Студзень',
    'Люты',
    'Сакавік',
    'Красавік',
    'Травень',
    'Чэрвень',
    'Ліпень',
    'Жнівень',
    'Верасень',
    'Кастрычнік',
    'Лістапад',
    'Снежань',
  ],
};

const feels = {
  en: 'Feels like:',
  ru: 'Ощущается как:',
  by: 'Адчуваецца як:',
};

const wind = {
  en: 'Wind:',
  ru: 'Ветер:',
  by: 'Вецер:',
};
const units = {
  en: { C: 'm/s', F: 'mi/h' },
  ru: { C: 'м/с', F: 'миль/ч' },
  by: { C: 'м/с', F: 'миль/ч' },
};
const humidity = {
  en: 'Humidity:',
  ru: 'Влажность:',
  by: 'Вільготнасць:',
};

export { days, months, feels, wind, units, humidity };
