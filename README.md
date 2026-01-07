🎓 Student API (Hono + Prisma)

A simple Student Management REST API built with Hono, Prisma, and SQLite.
This project demonstrates how to build a CRUD API with a database (without relationships).

📌 Project Overview

This API allows clients to:

Create students

Retrieve student data

Update student information

Delete students

It is designed as a backend-only service that can be consumed by:

Frontend apps

Mobile apps

API testing tools (Postman / curl)

🛠 Tech Stack
Tool	Purpose
Node.js	JavaScript runtime
Hono	Lightweight web framework
Prisma	ORM for database access
SQLite	Local file-based database
Nodemon	Development auto-reload
🏗 Project Structure
student-api/
├── src/
│   ├── server.js              # Start HTTP server
│   ├── app.js                 # Hono app instance
│   ├── config/
│   │   └── prisma.js           # Prisma client setup
│   └── modules/
│       └── student/
│           ├── student.route.js
│           ├── student.controller.js
│           └── student.service.js
│
├── prisma/
│   ├── schema.prisma           # Database schema
│   ├── migrations/             # Prisma migrations
│   └── dev.db                  # SQLite database
│
├── package.json
├── .gitignore
└── README.md

🧠 Architecture Diagram
Client (Postman / curl / Frontend)
            ↓ HTTP
        Hono API Server
            ↓
        Prisma ORM
            ↓
        SQLite Database

📦 Database Schema

Student (Single Model, No Relationships)

Field	Type
id	Integer (Auto Increment)
name	String
email	String
age	Integer
createdAt	DateTime
🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/student-api.git
cd student-api

2️⃣ Install Dependencies
npm install

3️⃣ Setup Database
npx prisma migrate dev --name init


This will:

Create SQLite database

Create Student table

Generate Prisma Client

4️⃣ Run the Server
npm run dev


Server will run at:

http://localhost:3000

🔗 API Endpoints
Get All Students
GET /api/students

Get Student by ID
GET /api/students/:id

Create Student
POST /api/students
Content-Type: application/json

{
  "name": "Ayu",
  "email": "ayu@mail.com",
  "age": 22
}

Update Student
PUT /api/students/:id

{
  "name": "Ayu Updated",
  "age": 23
}

Delete Student
DELETE /api/students/:id

🧪 Testing with curl
curl http://localhost:3000/api/students

curl -X POST http://localhost:3000/api/students \
-H "Content-Type: application/json" \
-d '{"name":"Budi","email":"budi@mail.com","age":21}'

🎯 Assignment Notes

Uses Prisma ORM

Database has no relationships

Implements full CRUD

Follows modular project structure

RESTful API design

📄 License

This project is created for educational purposes.

✨ Author

Created by Dwi Wahyu