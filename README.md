
# Student Management CRUD API

A lightweight Node.js REST API built with Express to manage student records using an in-memory database array.

## Features
* **Create**: Add a new student with serialized IDs (`017`, `018`, etc.)
* **Read**: Retrieve all students or a single student by ID
* **Update**: Update student information by ID
* **Delete**: Remove a student record from memory

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm i
   ```

2. **Run the Server:**
   ```bash
   npm run dev
   ```
   The server starts on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/createstudents` | Add a new student |
| **GET** | `/getallstudents` | Get all student records |
| **GET** | `/students/:id` | Get a student by ID |
| **PUT** | `/students/:id` | Update student details |
| **DELETE** | `/students/:id` | Delete a student |
