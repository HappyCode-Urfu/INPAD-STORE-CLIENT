## Стэк
- React
- SCSS
- TS
- Axios
- React Router Dom
- Recoil
- Vite


## Команды

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

## Импорт для .env

```
import.meta.env.[название]
```

Открытыми являются переменные, начинающиеся с VITE_

например:
```
PASSWORD=qwerty
VITE_SOME_KEY=some-public-value
```

В данном случае в клиентский код попадет только VITE_SOME_KEY

### .env.[среда]
```bazaar
#server
VITE_API_URL=http://localhost:5000
```
