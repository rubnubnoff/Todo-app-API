
API

Регистрация пользователя:    POST   http://localhost:3000/users/signup
Аутентификация пользователя: POST   http://localhost:3000/users/login

Получение списка задач:      GET    http://localhost:3000/tasks/tasks
Создание задачи:             POST   http://localhost:3000/tasks/task
Изменение задачи:            PUT    http://localhost:3000/tasks/task/:id
Удаление задачи:             DELETE http://localhost:3000/tasks/task/:id


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
>>>>>>> 5206d42c1b91f886578b49c7237b48de1a9adec9
