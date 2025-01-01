# Project Management API

This project is a RESTful API built using **Node.js**, **Express.js**, and **Sequelize ORM** for managing **Projects**, **Stories**, **Tasks**, and **Users**. The API interacts with a **PostgreSQL** database and supports basic CRUD operations.

## Tech Stack

The project uses the following technologies and dependencies:

- **Node.js**: `^16.0.0` or higher
- **Express.js**: `^4.17.1`
- **Sequelize**: `^6.10.0`
- **pg**: `^8.7.1`
- **pg-hstore**: `^2.3.3`
- **body-parser**: `^1.19.0`

## Prerequisites

Before cloning and running the project, ensure the following software is installed:

- **Node.js**: v16.x or later
- **npm**: v7.x or later
- **PostgreSQL**: Ensure that PostgreSQL is installed and running.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd project-management-app
   
2. **Install dependencies**:
   ```bash
   npm install

3. **Create a config.json file inside the config folder**:
   ```bash
   {
      "development":
         {
          "username": "your_postgres_user",
          "password": "your_postgres_pass",
          "database": "project_management_db",
          "host": "localhost",
          "dialect": "postgres"
         }
   }

4. **Generate and run migrations to create tables in your PostgreSQL**:
   ```bash
   npx sequelize-cli db:migrate

5. **Seed the database with initial data**:
   ```bash
   npx sequelize-cli db:seed:all

6. **Start the application:**
   ```bash
   node app.js

## Endpoints (The API exposes the following routes)

1. **Projects**
   - **GET** /projects: Get a list of all projects
   - **POST** /projects: Create a new project
   - **PUT** /projects/:id: Update a project by ID
   - **DELETE** /projects/:id: Delete a project by ID

2. **Stories**
   - **GET** /stories: Get a list of all stories
   - **POST** /stories: Create a new story
   - **PUT** /stories/:id: Update a story by ID
   - **DELETE** /stories/:id: Delete a story by ID

3. **Users**
   - **GET** /users: Get a list of all users
   - **POST** /users: Create a new user
   - **PUT** /users/:id: Update a user by ID
   - **DELETE** /users/:id: Delete a user by ID

## **Project Structure**
- **models/**: Sequelize models for Project, Story, Task, and User.
- **migrations/**: Sequelize migrations to create the corresponding database tables.
- **seeders/**: Seeders to populate the database with initial data.
- **config/**: Database configuration.
- **app.js**: Main Express application entry point.
- **routes/**: Define API routes for handling CRUD operations.

