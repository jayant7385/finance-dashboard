# 💰 Finance Dashboard UI

## 📌 Overview

This project is a **Finance Dashboard UI** built using React.js. It allows users to track financial activity, view summaries, manage transactions, and gain insights into spending patterns.

The application focuses on **clean UI, structured components, and effective state management**, rather than backend integration.

---

## 🚀 Features

* 📊 **Dashboard Overview**

  * Total Balance, Income, Expense summary cards
  * Balance trend (line chart)
  * Spending breakdown (pie chart)

* 💳 **Transactions Management**

  * Add, edit, and delete transactions
  * Search and filter by type and date
  * Reset filters option

* 🔐 **Role-Based UI**

  * Viewer: Read-only access
  * Admin: Can add/edit/delete transactions

* 💡 **Insights Section**

  * Highest spending category
  * Monthly comparison
  * Smart observation (saving vs overspending)

* 🌗 **Dark/Light Mode**

  * Full UI theme toggle

* 💾 **Local Storage Persistence**

  * Data remains after refresh

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Plain CSS
* **Charts:** Chart.js (react-chartjs-2)
* **State Management:** Context API
* **Storage:** LocalStorage

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd finance-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the project**

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```

---

## 🧠 Approach

The application is structured using reusable components for better maintainability. Global state is managed using Context API to handle transactions, filters, role, and theme.

The focus was on:

* Clean and intuitive UI
* Component-based architecture
* Real-world usability

---

## ⚖️ Technical Decisions & Trade-offs

* Used **React + Vite** for fast development
* Chose **plain CSS** for full styling control
* Used **Context API** instead of Redux for simplicity
* Implemented **LocalStorage** instead of backend

**Trade-offs:**

* No backend or authentication
* Role-based UI is simulated
* Charts are basic

---

## ⚠️ Limitations

* No backend integration
* No authentication system
* Limited input validation
* Basic chart customization

---

## 🚀 Future Improvements

* Backend integration (Node.js + database)
* Secure authentication and RBAC
* Advanced charts and filtering
* Pagination and better performance
* Unit testing and accessibility improvements

---

## 📌 Final Note

This project demonstrates my understanding of:

* React fundamentals
* State management
* UI/UX design
* Component structuring

It is not production-ready but reflects a solid foundation for building scalable frontend applications.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


