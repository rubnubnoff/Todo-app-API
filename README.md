API

Регистрация пользователя:    POST   http://localhost:3000/users/signup
Аутентификация пользователя: POST   http://localhost:3000/users/login

Получение списка задач:      GET    http://localhost:3000tasks/getTasks
Создание задачи:             POST   http://localhost:3000tasks/createTask
Изменение задачи:            PUT    http://localhost:3000tasks/updateTask/:id
Удаление задачи:             DELETE http://localhost:3000tasks/deleteTask/:id


JSON шаблоны
Регистрация пользователя: 
{
  "name": "",
  "email": "",
  "password": ""
}

Аутентификация пользователя: 
{
  "email": "",
  "password": ""
}

Создание задачи/изменение задачи: 
{
  "text": "",
  "status: "" (optional)
}



Александр Самсонов
