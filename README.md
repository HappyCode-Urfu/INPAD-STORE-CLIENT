# О сайте <img align="center" src="https://c.tenor.com/fYg91qBpDdgAAAAi/bongo-cat-transparent.gif"  width="30">
Веб-сервис с расчетом нагрузки сети на квартал / дом / секцию

## Стек Frontend приложения
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
- ![React Router Dom](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
- ![Recoil](https://img.shields.io/badge/Recoil-3578E5.svg?style=for-the-badge&logo=Recoil&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)

## Структура проекта <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width ="20">
```
.
└── .../
    ├── .env.production
    ├── .env.development
    ├── dist/ - Сборка проекта
    ├── public/ - Каталог, в котором лежат файлы, изменяемые и перемещаемые бандлером
    └── src/ - Корневая папка с кодом
        ├── assets/
        ├  ├── fonts/ - шрифты
        ├  ├── icons/ - иконки svg
        ├  └── images/ - картинки png 
        ├── enums/ - переиспользуемые enum
        ├── navigation/ - навигация
        ├── screens/ - страницы
        ├── services/ - сервисы (HTTP, EventBus)
        ├── shared/ - Переиспользуемые компоненты, хуки
        ├── store/ - state
        ├── styles/ - глобальные стили
        ├── types/ - глобальные типы
        ├── utils/ - утилиты
        ├── App.tsx
        ├── config.ts - конфиг
        ├── vite-env.d.ts
        └── main.tsx
```


## Команды <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width ="20">

```
# Установить зависимости
yarn install

# Запустить React приложение
yarn dev

# Проверяет наличие ошибок во всём проекте
yarn lint 

# исправление ошибок во всём проекте
yarn lint --fix

# Собрать проект
yarn build

# Просмотр собранного проекта
yarn preview

# форматирование всего кода по правилам prettier
yarn format
```

## Импорт для .env.[режим]

```
import.meta.env.[название]
```

Открытыми являются переменные, начинающиеся с VITE_

Например:
```
PASSWORD=qwerty
VITE_SOME_KEY=some-public-value
```

В данном случае в клиентский код попадет только VITE_SOME_KEY


## Environment variables

_Примечание: Переменные, не имеющие значений по умолчанию, являются обязательными_

| Name         | Default value          | Description                                                              |
|--------------|------------------------|--------------------------------------------------------------------------|
| NODE_ENV     | development            |                                                                          |
| VITE_API_URL | http://localhost:5000  | Хост, на котором развернута платформа. Например, `http://localhost:5000` |
