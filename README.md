# express-typescript-boilerplate

This project is a boilerplate for building RESTful APIs using Express and TypeScript.

It includes the following features:

- TypeScript for type safety and improved developer experience
- Express for building web applications and APIs
- Error handling middleware
- Logging utility
- Database connection setup
- Example routes, controllers, services, and models

## Getting Started

1. Clone the repository
2. Install dependencies using `npm install`
3. Start the development server using `npm run dev`

## Project Structure

- `src/`: Contains the source code for the application
  - `controllers/`: Contains the controllers for handling API requests
  - `dtos/`: Contains the data transfer objects for transferring data between layers
  - `middleware/`: Contains the middleware for handling errors and other cross-cutting concerns
  - `models/`: Contains the models for interacting with the database
  - `mongo/`: Contains the database connection setup
  - `routes/`: Contains the routes for defining API endpoints
  - `services/`: Contains the services for implementing business logic
  - `utils/`: Contains utility functions such as logging and helper functions
- `.env`: Contains environment variables
- `nodemon.json`: Contains configuration for nodemon
- `package-lock.json`: Contains the locked dependencies for the project
- `package.json`: Contains the project metadata and dependencies
- `tsconfig.json`: Contains the TypeScript configuration
