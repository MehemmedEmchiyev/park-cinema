# 🎬 Park Cinema

A responsive and user-friendly cinema ticket reservation application. Users can browse movies, view details, purchase tickets, and register or log into their accounts.

---

## 🔍 Project Overview

**Park Cinema** is a modern, stylish movie ticket booking platform built with React. Users can:

* Browse the movie list
* View detailed information about movies
* Register and log in to their accounts
* Book cinema tickets

---

## 🛠️ Technologies Used

| Technology          | Description                              |
| ------------------- | ---------------------------------------- |
| React               | For building the user interface          |
| Redux Toolkit       | For global state management              |
| React Router DOM    | For client-side routing and navigation   |
| Formik + Yup        | For form handling and validation         |
| Fetch API           | For making API requests                  |
| MUI (Material UI)   | For styled components and UI elements    |
| Tailwind CSS        | For responsive and utility-first styling |
| Styled Components   | For component-scoped styles              |
| Emotion             | CSS-in-JS styling support                |
| Swiper              | For touch sliders and carousels          |
| React Toastify      | For toast notifications                  |
| React Icons         | For icon integration                     |
| UUID                | For generating unique identifiers        |
| Date-fns / Dayjs    | For date manipulation                    |
| jQuery              | (Legacy/utility use)                     |
| Classnames          | For conditional class management         |
| React Scroll To Top | For back-to-top scroll button            |

---

## ⚙️ Features

* ✅ Responsive and user-friendly interface
* 🔐 User authentication and registration
* 🎟️ Ticket purchasing system
* 🎬 Movie listing and detail view
* ⚛️ Modern React architecture (Redux Toolkit, React Router, Formik)
* 🧪 Form validation with Formik & Yup
* 📡 Dynamic data fetching via Fetch API
* 🎨 Combination of Tailwind, MUI, and Styled Components for modern UI
* 🔔 Toast notifications for feedback
* 📆 Date pickers and phone inputs for better UX

## 🚀 Installation & Running Locally

To run this project on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/MehemmedEmchiyev/park-cinema.git
cd park-cinema
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

Then open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
park-cinema/
├── public/
├── src/
│   ├── assets/img/     # Static images
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page-level components (e.g., Home, Login)
│   ├── routing/        # React Router configuration
│   ├── schemas/        # Yup validation schemas
│   ├── services/       # API call functions using Fetch
│   ├── store/          # Redux Toolkit store setup
│   ├── style/          # CSS files for styling
│   ├── App.jsx         # Main App component
│   └── main.jsx        # React entry point
├── package.json
└── README.md
```

