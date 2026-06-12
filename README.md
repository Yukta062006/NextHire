# 🧠 NextHire — AI Hiring Intelligence Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-blue?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org)

> NextHire is an AI-powered hiring intelligence platform that automates resume screening, conducts adaptive interviews, evaluates technical skills, and provides recruiters with data-driven hiring insights.

---

## 🚀 Live Demo

🌐 Live Application: https://your-live-url.com

🎥 Video Demo: https://vimeo.com/1200711181

---

## 🌟 Overview

Traditional hiring processes are time-consuming, inconsistent, and heavily dependent on manual screening.

NextHire solves these challenges by combining Artificial Intelligence, adaptive interviews, skill verification, and recruiter analytics into a single platform.

The system helps:

### Candidates
- Upload and analyze resumes
- Receive AI-driven interview experiences
- Track performance and skill development
- Access personalized career recommendations

### Recruiters
- Evaluate candidates efficiently
- Verify skills against resume claims
- View AI-generated hiring insights
- Make data-driven hiring decisions

---

## ✨ Features

### 📄 Resume Intelligence
- Resume upload and parsing
- Skill extraction
- Candidate profiling
- Resume scoring

### 🎯 Job Description Analyzer
- Resume vs JD comparison
- Skill gap identification
- Match percentage calculation
- Optimization recommendations

### 🎤 Adaptive AI Interviews
- Dynamic interview difficulty
- Real-time candidate evaluation
- Technical and behavioral questioning
- Automated scoring

### 📊 Recruiter Dashboard
- Candidate ranking
- Interview performance metrics
- Skill verification indicators
- Hiring recommendations

### 🤖 AI Career Coach
- Personalized learning roadmaps
- Career guidance
- Skill improvement suggestions
- Progress tracking

### 🔔 Real-Time Notifications
- Interview updates
- Recruiter alerts
- Candidate progress updates

### 🔐 Authentication System
- Secure login and signup
- JWT authentication
- Firebase integration

---

## 🏗️ Architecture

```text
NextHire
│
├── Frontend (Next.js + TypeScript)
│   ├── Dashboard
│   ├── Resume Analyzer
│   ├── Live Interview
│   ├── Recruiter Workspace
│   ├── Career Coach
│   └── Authentication
│
├── Backend (FastAPI)
│   ├── Authentication APIs
│   ├── Resume Processing
│   ├── Interview Engine
│   ├── Recruiter APIs
│   └── AI Services
│
├── Database
│   ├── SQLite
│   └── SQLAlchemy ORM
│
└── AI Layer
    ├── Gemini AI
    ├── Resume Analysis
    ├── Interview Evaluation
    └── Career Coaching
```

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

### Database
- SQLite
- SQLAlchemy ORM

### AI
- Google Gemini AI

### Authentication
- Firebase Authentication
- JWT Tokens

---

## 📂 Project Structure

```text
NextHire/
│
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   ├── login/
│   │   ├── signup/
│   │   └── onboarding/
│   │
│   ├── components/
│   └── utils/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── routers/
│   │   ├── agents/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── requirements.txt
│   └── migrate_db.py
│
├── public/
├── README.md
└── LICENSE
```

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/Yukta062006/NextHire.git
cd NextHire
```

### Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create:

```text
backend/.env
```

Add:

```env
GOOGLE_API_KEY=your_gemini_api_key
```

Run:

```bash
python migrate_db.py
python -m uvicorn app.main:app --reload --port 8000
```

Backend runs on:

```text
http://localhost:8000
```

---

## 🎥 Demo Video

Watch the complete project walkthrough:

https://vimeo.com/1200711181

---

## 🙏 Acknowledgements

NextHire is based on the open-source Hirevium project and has been significantly enhanced with:

- Custom NextHire branding
- UI redesign and animations
- Authentication improvements
- Dashboard enhancements
- Bug fixes and optimizations
- Additional recruiter and candidate features

The original project provided the foundation upon which NextHire was further developed.

---

## 👨‍💻 Developer

**Yukta Thakur**

GitHub:
https://github.com/Yukta062006

Project:
NextHire – AI Hiring Intelligence Platform

---

## 📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.
