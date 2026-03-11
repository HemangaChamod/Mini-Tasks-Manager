# Mini Task Management System

## Project Overview

The Mini Task Management System is a full-stack web application that allows users to manage their daily tasks efficiently.

Users can register, log in, create tasks, assign priorities, set due dates, track task status, and filter tasks using a modern dashboard interface.

The application is built using a **Spring Boot REST API backend** and a **Next.js frontend**, with **JWT authentication** to secure API access.

---

# Features

- User registration and login
- JWT-based authentication
- Create new tasks
- Set task priority (LOW / MEDIUM / HIGH)
- Set task due date
- Update task status (TODO → IN_PROGRESS → DONE)
- Delete tasks
- Filter tasks by status and priority
- Sort tasks by priority or due date
- Pagination for task lists

---

# Technology Stack

## Frontend
- Next.js
- React
- Axios

## Backend
- Spring Boot
- Spring Security
- JWT Authentication
- JPA / Hibernate

## Database
- MySQL

## Tools
- Maven
- Git
- GitHub

---

# Project Structure

task-manager
│
├── frontend
│ ├── app
│ ├── services
│ ├── utils
│ └── package.json
│
├── backend
│ ├── controller
│ ├── service
│ ├── repository
│ ├── model
│ ├── security
│ └── config
│
└── README.md

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <repository-url>
cd task-manager
