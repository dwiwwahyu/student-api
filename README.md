# 🎓 Student API (Hono + Prisma)

A simple **Student Management REST API** built with **Hono**, **Prisma**, and **SQLite**.

---

## 📌 Project Overview

This project demonstrates how to build a **CRUD REST API** using Prisma **without database relationships**.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|--------|
| Node.js | JavaScript runtime |
| Hono | Lightweight web framework |
| Prisma | ORM for database access |
| SQLite | Local file-based database |
| Nodemon | Development auto-reload |

---

## 🏗 Project Structure

student-api/
├── src/
│ ├── server.js # Start HTTP server
│ ├── app.js # Hono app instance
│ ├── config/
│ │ └── prisma.js # Prisma client setup
│ └── modules/
│ └── student/
│ ├── student.route.js
│ ├── student.controller.js
│ └── student.service.js
│
├── prisma/
│ ├── schema.prisma
│ ├── migrations/
│ └── dev.db
│
├── package.json
├── .gitignore
└── README.md


---

## 🧠 Architecture

Client (Postman / curl / Frontend)
↓ HTTP
Hono API Server
↓
Prisma ORM
↓
SQLite Database


---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
Setup database
npx prisma migrate dev --name init

Run server
npm run dev


Server runs on:

http://localhost:3000

🔗 API Endpoints
Method	Endpoint
GET	/api/students
GET	/api/students/:id
POST	/api/students
PUT	/api/students/:id
DELETE	/api/students/:id