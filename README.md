<div align="center">
  <h1>🎓 Student Management System</h1>
  <p>A modern, full-stack web application designed for academic administrators to manage student records efficiently.</p>
</div>

<br />

## 🚀 Project Overview

This project is an MVP for a **Student Management System** that allows academic administrators and faculty to create, read, update, and delete (CRUD) student records seamlessly. It is built using a modern, decoupled architecture separating the front-end and back-end logic.

## 🛠️ Tech Stack

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Backend

![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white)

---

## 👨‍🎓 Developer Information

- **Name:** Huỳnh Phạm Gia Khang
- **Student ID:** 23729841

---

## 📂 Folder Structure

```text
ptud_vibecoding_exercise/
├── backend/                # Python FastAPI codebase
│   ├── app/                # Application logic (routes, models, schemas)
│   ├── scripts/            # Utility scripts (e.g., generate mock data)
│   ├── requirements.txt    # Python dependencies
│   └── .env.example        # Environment variables template
├── frontend/               # Next.js frontend codebase
│   ├── src/                # React components, pages, and utilities
│   ├── public/             # Static assets
│   ├── package.json        # Node.js dependencies
│   └── .env.example        # Environment variables template
└── README.md               # This documentation file
```

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- Python 3.9 or higher
- Git

### 1. Clone the Repository

```bash
git clone <repository_url>
cd ptud_vibecoding_exercise
```

### 2. Environment Variables

You need to configure environment variables for both the frontend and backend.

**Backend (`backend/.env`)**

```bash
cd backend
cp .env.example .env
```

| Variable       | Description                       | Default Value               |
| -------------- | --------------------------------- | --------------------------- |
| `CORS_ORIGINS` | Allowed origins for CORS          | `["http://localhost:3000"]` |
| `DATABASE_URL` | SQLite database connection string | `sqlite:///./students.db`   |
| `SECRET_KEY`   | Secret key for JWT auth/sessions  | `your-secret-key-goes-here` |

**Frontend (`frontend/.env.local`)**

```bash
cd frontend
cp .env.example .env.local
```

| Variable              | Description                  | Default Value               |
| --------------------- | ---------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL for the backend API | `http://localhost:8000/api` |

## 🏃‍♂️ How to Run (Development Mode)

**1. Start the Backend:**

```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate

pip install -r requirements.txt

# (Optional) Generate mock data
python scripts/generate_data.py

# Start the server
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

> API Docs available at: `http://127.0.0.1:8000/docs`

**2. Start the Frontend:**

```bash
cd frontend
npm install

# Start the development server
npm run dev
```

> Application available at: `http://localhost:3000`

---

## 🤖 Development Process

As required by the course instructor, this project was built using an **AI agentic coding** (vibecoding) workflow. The agent used is **Antigravity** — an Advanced Agentic Code Generator — which assisted in generating, refining, and iterating on the codebase interactively.

The development process followed these steps:

- **Project scaffolding** — Antigravity was prompted to scaffold the full-stack project structure, separating the FastAPI backend and Next.js frontend into their respective directories.
- **Backend development** — The agent generated the SQLAlchemy models, Pydantic schemas, and FastAPI route handlers for all CRUD operations on student records.
- **Database setup** — SQLite was configured as the database engine via SQLAlchemy; the agent also generated a mock data script (`scripts/generate_data.py`) for development purposes.
- **Frontend development** — The agent built the React/Next.js UI components using Tailwind CSS and TypeScript, including pages for listing, creating, editing, and deleting student records.
- **API integration** — The frontend was wired up to consume the backend REST API using environment-variable-driven base URLs for flexibility across environments.
- **Environment configuration** — `.env.example` templates were generated for both frontend and backend to standardize local setup.
- **Iterative refinement** — Throughout the process, the agent was given follow-up prompts to fix bugs, improve UI layout, and align the codebase with project requirements.

> 🔗 **Repository:** [https://github.com/hpgiakhang1405/ptud_vibecoding_exercise_01](https://github.com/hpgiakhang1405/ptud_vibecoding_exercise_01)

---

## ✨ Credits

**Vibecoded interactively by:** 🤖 **Antigravity** _(Advanced Agentic Code Generator)_
