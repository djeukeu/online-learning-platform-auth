# Online Learning Platform Authentication Service

The online learning platform authentication service is a REST API developed using Node.js, providing two core services: **Authentication** and **User Management**. The Authentication Service handles user registration and login, issuing secure JSON Web Tokens (JWT) for sessionless authentication, while the User Service allows authenticated users to view their profile.

## Requirements
* Docker Install
* Install the required node version as indicated in `.nvmrc` file

## Launch Project

1. Clone the repo
   ```
   git clone <repo_url>
   ```
2. Create `.env.development` file
   
   Create a `.env.development` file using [.env.example](.env.example) as template

3. Install dependencies
   ```
   yarn install
   ```
4. Launch Docker compose
   ```
   yarn docker-compose
   ```
5. Start the server
   ```
   yarn start:dev
   ```

## API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/auth/login`  | Login user        |
| POST   | `/api/auth/signup` | Register user     |
| GET    | `/api/user`        | Get users list    |
| GET    | `/api/user/:id`    | Get user by ID    |
| GET    | `health`           | healthcheck route |

## Scripts
* Launch the project after build: `yarn start`
* Launch the project in development: `yarn start:dev`
* Build the project: `yarn build`
* Prettify all project files: `yarn pretty` 
* Test for linting errors: `yarn lint` 
* Test for linting and fix automaticaly linting errors: `yarn lint:fix` 
* Launch docker compose: `yarn docker-compose`
* Generate migration and migrate them (use only in development environment): `yarn prisma:dev`
* Apply all pending migrations(use only in production environment): `yarn prisma:deploy`
    