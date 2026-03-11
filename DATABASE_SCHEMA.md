# Database Schema

The application uses MySQL as the relational database.

Two main tables are used:

- Users
- Tasks

---

## Users Table

Stores user account information.

| Column | Type | Description |
|------|------|-------------|
| id | BIGINT | Primary key |
| username | VARCHAR | Username of the user |
| email | VARCHAR | Unique email address |
| password | VARCHAR | Encrypted user password |
| role | ENUM | User role (USER / ADMIN) |

---

## Tasks Table

Stores tasks created by users.

| Column | Type | Description |
|------|------|-------------|
| id | BIGINT | Primary key |
| title | VARCHAR | Task title |
| description | TEXT | Task description |
| status | ENUM | TODO, IN_PROGRESS, DONE |
| priority | ENUM | LOW, MEDIUM, HIGH |
| due_date | DATETIME | Task due date |
| created_at | DATETIME | Task creation timestamp |
| updated_at | DATETIME | Last update timestamp |
| user_id | BIGINT | Foreign key referencing Users table |

---

## Relationship

One user can have multiple tasks.

Relationship:

```
Users (1) ─────── (Many) Tasks
```

The `user_id` column in the `tasks` table references the `id` column in the `users` table.
