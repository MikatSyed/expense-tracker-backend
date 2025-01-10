# Backend - Expense Tracking Dynamic Web Application

## Prerequisites
Before running the backend application, make sure you have the following installed:
- **Node.js**: Version 14.x or higher (Download from [here](https://nodejs.org/))
- **MongoDB**: Ensure that you have MongoDB running locally or use a cloud service like MongoDB Atlas.

## Setup
1. Clone the repository to your local machine.
    ```bash
    git clone <your-repository-url>
    cd <your-project-folder>/backend
    ```

2. Install the dependencies.
    ```bash
    npm install
    ```

3. Configure MongoDB by updating the `DB_URI` in the `.env` file (or create one if not present):
    ```
    DB_URI=mongodb://localhost:27017/expense-tracker
    ```

## Running the Application
1. After installing the dependencies and configuring the database, start the backend server:
    ```bash
    npm start
    ```

2. The backend will run on `http://localhost:5000`.

## API Endpoints
The backend exposes the following API endpoints:

### `POST /api/expenses`
- **Description**: Add a new expense entry.
- **Request Body**:
  ```json
  {
    "category": "Groceries",
    "amount": 50.5,
    "purpose": "Groceries for the week",
    "date": "2025-01-10T12:30:00Z"
  }