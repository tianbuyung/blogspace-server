# BlogSpace Server

## Description

This REST API is built to save [Blog Todo App](https://blogtodo.netlify.app/) in database. Using the most modern, most popular, and most in-demand technologies in the JavaScript ecosystem, such as Node.js, Express.js, with SQL Database is PostgreSQL!

## REST API Link

This is Rest API link for live server = <https://blogspace-server.herokuapp.com/>, you can try this API with [postman](https://www.postman.com/) based on this collection: [blogspace-server-local.postman_collection](/blogspace-server-local.postman_collection.json).

Note: _please change the url with live server also you can deploy in your local based on this below tutorial_.

## Installation in Local

1. This app requires [Node.js v18+](https://nodejs.org/en/), [Postgresql v15+](https://www.postgresql.org/download/), [Sequelize v6](https://sequelize.org/) to run.

2. Clone this repository.

   ```sh
   git clone https://github.com/tianbuyung/blogspace-server
   ```

3. Mount the directory using terminal.

   ```sh
   cd blogspace-server
   ```

4. Install dependencies via terminal

   ```sh
   npm ci
   ```

5. Create `.env` file with contents according to the example (see [.env.example](/.env.example)) or your app will running default on PORT=3000

6. Run your postgres application.

7. Create database in your local computer

   ```sh
   npx sequelize-cli db:create
   ```

8. Migrate model into your database

   ```sh
   npx sequelize-cli db:migrate
   ```

9. Start your App via terminal

   ```sh
   npm run start
   ```

## Interaction with App

- You can try restful API for this app on <http://localhost:3000> (it's depend with your port setting) via [postman](https://www.postman.com/)
- You can try register API: <http://localhost:3000/auth/register> with `POST` method
- You can try login API and get your Bearer Token (JWT): <http://localhost:3000/auth/login> with `POST` method
- Then you can create todo list, see more endpoints and you can import this collection: [blogspace-server-local.postman_collection](/blogspace-server-local.postman_collection.json)

## Authors

Septian Maulana

## License

[MIT](/LICENSE.md) License
