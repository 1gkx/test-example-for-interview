## Описание

Тестовое задание

## Методы
Получение списка достопримечательностей по городу
* **URL**  http://localhost:8000/[city]/sights
* **Method:** `GET`
* **URL Params** city `Required`
***
Добавление достопримечательности к городу, если города нет, то создать
* **URL**  http://localhost:8000/[city]
* **Method:** `POST`
* **URL Params** [city] `Required`
* **Data Params**
	`{ name: 'string', decription: 'string', architect: 'string'}`
***
Получение jwt-токена
* **URL**  http://localhost:8000/auth/login
* **Method:** `POST`
* **URL Params** отсутствуют
* **Data Params**
	`{ username: 'username', password: 'password'}`
*** 
Вывод информации о пользователи
* **URL**  http://localhost:8000/profile
* **Method:** `GET`
* **URL Params** отсутствуют