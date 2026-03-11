# API Documentation

The backend exposes REST APIs for authentication and task management.

Base URL:

```
http://localhost:8080/api
```

---

# Authentication APIs

## Register User

**Endpoint**

```
POST /api/auth/register
```

**Request Body**

```json
{
  "username": "John",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**

```
User registered successfully
```

---

## Login User

**Endpoint**

```
POST /api/auth/login
```

**Request Body**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response**

```
JWT Token
```

The returned token must be used for authenticated requests.

---

# Task APIs

All task endpoints require the Authorization header.

Example:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Get Tasks (Pagination)

**Endpoint**

```
GET /api/tasks?page=0&size=10
```

**Description**

Returns a paginated list of tasks belonging to the logged-in user.

---

## Create Task

**Endpoint**

```
POST /api/tasks
```

**Request Body**

```json
{
  "title": "Complete assignment",
  "description": "Finish internship task manager assignment",
  "priority": "HIGH",
  "status": "TODO",
  "dueDate": "2026-03-12T00:00:00"
}
```

---

## Update Task Status

**Endpoint**

```
PUT /api/tasks/{id}/status?status=IN_PROGRESS
```

**Description**

Updates the status of a specific task.

---

## Delete Task

**Endpoint**

```
DELETE /api/tasks/{id}
```

**Description**

Deletes a task belonging to the authenticated user.
