
# User Authentication System

This project demonstrates a simple, secure, and clean full-stack authentication flow.

## Cloning the Repository

To get started, clone this repository:

```bash
git clone https://github.com/James2239/user-authentication-system.git
```

Then navigate into the project directory:

```bash
cd user-authentication-system
```

## Tech Stack

- **Frontend:** React (Create React App)
- **Backend:** Node.js with Express
- **Database:** SQLite (using sqlite3)
# User Authentication System
## Tech Stack
- **Frontend:** React (Create React App)
- **Backend:** Node.js with Express
- **Database:** SQLite (using sqlite
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcrypt
- **Styling:** Custom CSS (with card-based layout)

## How to Run the Project
### Prerequisites
- Node.js and npm installed

### 1. Backend
1. Open a terminal and navigate to the `backend` directory:
   cd backend
2. Install dependencies:
   npm install express sqlite3 bcrypt jsonwebtoken cors
3. Start the backend server:
   node server.js
   The backend will run on http://localhost:4000

### 2. Frontend
1. Open a new terminal and navigate to the `frontend` directory:
   cd frontend
2. Install dependencies:
   npm install
3. Start the React app:
   npm start
   The frontend will run on http://localhost:3000

### 3. Usage
- Register a new user, then log in.
- Upon successful login, you will be redirected to a protected dashboard.

## Assumptions & Decisions
- Used SQLite for simplicity and zero setup; suitable for demo and small-scale use.
- JWT is stored in localStorage for demo purposes (in production, httpOnly cookies are safer).
- Passwords are securely hashed with bcrypt before storage.
- Basic input validation is performed on both frontend and backend.
- The backend and frontend are run separately and communicate via HTTP.
- CORS is enabled on the backend for local development.
- The UI is intentionally simple and focused on clarity and usability.

## What I Would Improve with More Time
- Add email verification and password reset functionality.
- Use environment variables for all secrets and configuration.
- Improve error and success feedback to the user (e.g., toasts, loading spinners).
- Add more comprehensive form validation (e.g., password strength, email format).
- Implement user roles and permissions for more granular access control.
- Use a more robust database (e.g., PostgreSQL) for production.
- Add tests for backend and frontend components.
- Enhance the UI/UX with a design system or component library (e.g., Material-UI).
- Containerize the app with Docker for easier deployment.
