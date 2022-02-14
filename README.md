<p align="center">
  <img alt="poster" src="https://github.com/DemonWayne/time-warn/blob/lite/assets/poster.png" >
</p>
<h1 align="center">Time Warn Lite ⏳</h1>

## Где указать токен?
В корне есть файл [.env.example](https://github.com/DemonWayne/time-warn/blob/lite/.env.example)

Дублируете его, убираете .example и в поле DISCORD_TOKEN после знака равно вставляете токен своего бота

Создать бота можно [здесь](https://discord.com/developers/applications)

## Настройка
Настройка состоит из 2-х этапов.
1. Изменить ID канала в [данном файле](https://github.com/DemonWayne/time-warn/blob/lite/src/utils/index.js)
2. Настроить [конфиг](https://github.com/DemonWayne/time-warn/blob/lite/src/utils/config.js) под себя

## Как настроить конфиг?
```js
  // День недели маленькими буквами
  понедельник: {
    // Время в формате как ниже
    '8:00': {
      // Название предмета
      name: 'Русский язык',
      // Ссылка (если дист.)
      url: 'https://meet.google.com/',
      // Кабинет
      cabinet: '1',
    },
  },
```

## Как включить бота?
1. Открываем консоль
2. Пишем **npm i --force** для установки модулей [Установить node и npm можно здесь](https://nodejs.org/)
3. Когда модули установятся пишем node .

## Лицензия

MIT © [DemonWayne](https://github.com/DemonWayne)
