# Surfe - Live Coding Challenge

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Yarn](https://yarnpkg.com/) package manager
- [Docker](https://www.docker.com/) and Docker Compose

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:surfe/live-coding-session.git
   cd live-coding-session
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the backend (Mock API)**
   ```bash
   docker compose up
   ```
   This will spin up the backend server with request logging enabled.

4. **Start the frontend development server** (in a new terminal)
   ```bash
   yarn dev
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the development server |
| `yarn build` | Build for production |
| `yarn lint` | Run ESLint |
| `yarn preview` | Preview the production build |

### API Documentation

Once the Docker container is running, you can access the full API documentation at:

📖 **http://localhost:8080/docs**

---

## 📋 Context

Surfe is a sales platform designed to help salespeople become more efficient and effective by eliminating many of the repetitive administrative tasks inherent in their role.

In a nutshell, we support the sales prospecting journey:

1. **Sourcing** — Finding People and Companies
2. **Enrichment** — Finding quality contact information (phone + email)
3. **Providing Insights** — Finding the insights and intent signals about People and Companies (e.g., someone switched jobs or roles, a company received funding, etc.)
4. **Outreach** — Messaging the right Person at the right time with the right message by leveraging all of the above

---

## 🎯 The Challenge

In this challenge you will be implementing the UI for the second pillar of Surfe, **Enrichment**. 

Provided is an existing Contact Profile page that initially shows basic, mocked, information about the contact with two fields, **Phone** and **Email**, left empty and editable by the user. We want you to implement the enrichment functionality that will update these two fields using the provided API endpoints.

---

## ✅ Requirements

### Technical Requirements

- Must be incorporated into the existing UI
- Should follow modern React practices
- Should use the provided API endpoints

### Feature Requirements

- The contacts should be fetched from the API
- Users can start enrichment for Email or Phone via a button next to each field
- The fields should still be editable when enrichment is not in progress
- While enrichment is in progress, hovering over a field shows which provider(s) are currently being queried
- When enrichment completes, update the field with the returned value if available
- Should handle basic UX cases for loading and error states

---

## ⭐ Bonus Task

The find rate when just sending the contact ID is relatively low. To combat this, we can call the third-party endpoint described below to get additional information and provide this additional information when starting an enrichment.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/contacts` | Returns all existing contacts in the database |
| `GET` | `/contact/{ID}` | Returns the basic information around the contact based on their ID |
| `POST` | `/enrichment/start` | Starts an enrichment, taking the userID and additional optional payload |
| `GET` | `/enrichment/{ID}` | Returns the status of the enrichment based on the ID |
| `GET` | `/thirdparty/{FULL_NAME}` | Returns additional information about the user based on their full name |

---

## 🎯 Outcome

We do not expect you to provide us with a production-ready implementation by the end of the session. We want to see a **working proof-of-concept** and how you have chosen to approach the problem.

---

## 📊 Evaluation Criteria

This is a live programming challenge, therefore we're interested in seeing:

- **Code Quality** — Clean, readable, and maintainable code
- **Architecture & Code Structure** — Well-organized project structure and component design
- **Communication** — Clear explanation of your thought process and decisions
- **UX Considerations** — Thoughtful handling of loading states, errors, and user interactions