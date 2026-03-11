# Mini Task Management System

## Project Overview

The Mini Task Management System is a full-stack web application that allows users to manage their daily tasks efficiently. Users can register, log in, and create tasks while organizing them with priorities, due dates, and status updates.

The system is designed using a client-server architecture where the frontend communicates with the backend through REST APIs.

The application uses JWT authentication to ensure that users can only access and manage their own tasks.

### Technologies Used

Frontend:
- Next.js
- React
- Axios

Backend:
- Spring Boot
- Spring Security
- JWT Authentication
- JPA / Hibernate

Database:
- MySQL

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mini-task-manager
```

### 2. Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Build the project using Maven.

```bash
mvn clean install
```

### 3. Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install required dependencies.

```bash
npm install
```

---

## Database Configuration

This application uses MySQL as the database.

### Step 1 – Create Database

Run the following SQL command in MySQL.

```sql
CREATE DATABASE Task_Manager_DB;
```

### Step 2 – Configure Backend Environment Variables

Create a `.env` file inside the backend directory.

Example configuration:

```
DB_URL=jdbc:mysql://localhost:3306/Task_Manager_DB
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
JWT_SECRET=your_secure_jwt_secret
FRONTEND_URL=http://localhost:3000
```

### Step 3 – Configure Frontend Environment Variables

Create a `.env.local` file inside the frontend directory.

Example:

```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

---

## Steps to Run the Application

### Run Backend

Navigate to backend directory.

```bash
cd backend
```

Start the Spring Boot server.

```bash
mvn spring-boot:run
```

Backend will run at:

```
http://localhost:8080
```

---

### Run Frontend

Navigate to frontend directory.

```bash
cd frontend
```

Start the development server.

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:3000
```

---

### Access the Application

Open a browser and go to:

```
http://localhost:3000
```

Users can now register, log in, and manage tasks.
