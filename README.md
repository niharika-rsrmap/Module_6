# Module 6 Assignment – Routing and Dashboard Setup

## 🚀 Project Overview

This project implements a routing structure and a role-based dashboard for a Learning Management System (LMS) using **TanStack Router**, **React**, **TypeScript**, **Axios**, and **JWT**. The dashboard dynamically renders views based on authenticated user roles: **Student**, **Instructor**, or **Admin**.

---

## 🧩 Features Implemented

- ✅ **TanStack Router** for client-side navigation
- ✅ **JWT-based authentication**
- ✅ **Role-based access control**
- ✅ **Protected routes for dashboards**
- ✅ Dynamic dashboards:
  - 🧑‍🎓 *Students*: "My Courses"
  - 👨‍🏫 *Instructors*: "Manage Courses"
  - 👩‍💼 *Admins*: "User Management"
- ✅ Modular and readable code structure

---

## 📁 Project Structure

src/
│
├── pages/
│ ├── Home.tsx
│ ├── Login.tsx
│ ├── Register.tsx
│ ├── Dashboard.tsx
│ ├── StudentDashboard.tsx
│ ├── InstructorDashboard.tsx
│ └── AdminDashboard.tsx
│
├── routes/
│ └── router.tsx
│
├── utils/
│ └── auth.ts
│
├── main.tsx
└── App.tsx

yaml
Copy
Edit

---

## 🛠️ Installation and Setup

### Prerequisites

- Node.js v16+
- npm or yarn

### Steps to Run

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Login Flow:

Use a valid JWT token to access the /dashboard.

Token must include role in its payload (student, instructor, or admin).

🔐 Role-Based Access
JWT Decoding: Implemented with jwt-decode to extract user role.

Protected Routes: Custom route protection logic blocks unauthorized access.

Conditional Rendering: Dashboard content changes based on extracted user role.

Example JWT Payload:
json
Copy
Edit
{
  "sub": "user123",
  "name": "Jane Doe",
  "role": "student",
  "exp": 1723551092
}
🔎 Key Packages Used
@tanstack/react-router: Powerful router for React

axios: Promise-based HTTP client

jwt-decode: Decode JWT tokens

✅ Deliverables Summary
 Home, Login, Register, and Dashboard routes

 Role-based rendering for Student, Instructor, Admin

 Middleware-like protection in routing layer

 JWT decoding and user validation

 Complete code in modular structure

 This README for project documentation




