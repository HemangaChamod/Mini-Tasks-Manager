# Mini Task Management System

## Project Overview

The Mini Task Management System is a full-stack web application designed to help users manage their daily tasks efficiently. The system allows users to create, update, track, and delete tasks while organizing them using priorities and due dates.

Users can register and log in securely using JWT-based authentication. Once authenticated, users can manage their own tasks through a simple and user-friendly dashboard.

The project is built using a modern web development stack consisting of a Next.js frontend, a Spring Boot backend, and a MySQL database.

### Key Features
- User registration and login
- Secure authentication using JWT tokens
- Create new tasks
- Assign priorities to tasks
- Set due dates
- Update task status (TODO, IN_PROGRESS, DONE)
- Delete tasks
- Filter tasks by status and priority
- Sort tasks by priority or due date
- Pagination support for task lists

---

## Setup Instructions

### 1. Clone the Repository

Clone the project repository from GitHub.

```bash
git clone <repository-url>
cd mini-task-manager
```

---

### 2. Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Build the backend project using Maven.

```bash
mvn clean install
```

---

### 3. Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install the required dependencies.

```bash
npm install
```

---

## Database Configuration

This project uses **MySQL** as the database.

### Step 1 – Create the Database

Open your MySQL client and create a new database.

```sql
CREATE DATABASE Task_Manager_DB;
```

---

### Step 2 – Configure Environment Variables

Sensitive information such as database credentials and JWT secrets are stored using environment variables.

Create a `.env` file inside the **backend directory**.

Example configuration:

```
DB_URL=jdbc:mysql://localhost:3306/Task_Manager_DB
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
JWT_SECRET=your_secure_jwt_secret
FRONTEND_URL=http://localhost:3000
```

---

### Frontend Environment Configuration

Create a `.env.local` file inside the **frontend directory**.

Example configuration:

```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

These environment files are excluded from GitHub using `.gitignore` to prevent sensitive data from being exposed.

---

## Steps to Run the Application

### 1. Run the Backend Server

Navigate to the backend folder.

```bash
cd backend
```

Start the Spring Boot server.

```bash
mvn spring-boot:run
```

The backend API will run at:

```
http://localhost:8080
```

---

### 2. Run the Frontend Application

Navigate to the frontend folder.

```bash
cd frontend
```

Start the Next.js development server.

```bash
npm run dev
```

The frontend application will run at:

```
http://localhost:3000
```

---

### 3. Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

You can now:
- Register a new user
- Log in to the system
- Create tasks
- Manage task status
- Filter and sort tasks
- Delete tasks

---

## Environment Variables

The following environment variables are required for the application.

### Backend

| Variable | Description |
|--------|-------------|
| DB_URL | Database connection URL |
| DB_USERNAME | Database username |
| DB_PASSWORD | Database password |
| JWT_SECRET | Secret key used to sign JWT tokens |
| FRONTEND_URL | Allowed frontend origin for CORS |

### Frontend

| Variable | Description |
|--------|-------------|
| NEXT_PUBLIC_API_URL | Backend API base URL |

---

## Notes

- The backend uses **Spring Security with JWT authentication** to protect API endpoints.
- Each user can only access their own tasks.
- Environment variables are used to secure sensitive configuration data.
- `.env` and `.env.local` files are excluded from version control using `.gitignore`.

---

## Author

Chamod Lakshitha
