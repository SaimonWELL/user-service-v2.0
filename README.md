# User Service

Этот проект представляет собой сервис для работы с пользователями на основе NestJS и PostgreSQL. В сервисе реализован эндпоинт, который проставляет флаг "проблемы" у пользователей в `false` и возвращает количество пользователей, у которых этот флаг был `true`.

## Установка

### Предварительные требования

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/)

### Шаг 1: Клонирование репозитория

Клонируйте репозиторий:

```bash
git clone https://github.com/SaimonWELL/user-service-v2.0.git
cd user-service
```
### Шаг 2:Установите зависимости

```bash
npm install
```
### Шаг 3: Соберите и запустите контейнер

```bash
docker-compose up -d
```

### Шаг 4: Запуск миграций
```bash
npx typeorm-ts-node-commonjs --d src/data-source.ts migration:run   
```
 ### Эндпоинт
Эндпоинт для обновления флага "проблемы" у всех пользователей на false и возврата количества пользователей, у которых флаг был true.
1. **reset-problems**
    - Метод: `POST`
    - URL: `/users/reset-problems`
    - Ответ:
    ```json
    {
      "count": 1234
    }
    ```

