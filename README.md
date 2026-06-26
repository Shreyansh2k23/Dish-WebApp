# 🍽️ Dish Management Dashboard

A modern full-stack web application for managing dishes with real-time updates. This project allows users to view dishes, toggle their published status, and instantly reflect changes across all connected clients using **Socket.IO**.

## 🚀 Features

* 📋 View all dishes in a responsive dashboard
* 🔄 Toggle dish publish/unpublish status
* ⚡ Real-time updates using Socket.IO
* 📱 Responsive modern UI
* 🗄️ MongoDB database integration
* 🔗 RESTful API built with Express.js
* 🎨 Clean and attractive glassmorphism design

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Axios
* Socket.IO Client
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* CORS
* Dotenv

---

## 📂 Project Structure

```
DishDashboard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── seed.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Shreyansh2k23/dish-dashboard.git

cd dish-dashboard
```

---

### 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🌱 Import Sample Data

Place your `dishes.json` file inside the `data` folder and run:

```bash
node seed.js
```

This will populate MongoDB with the sample dishes.

---

## 📡 API Endpoints

### Get All Dishes

```
GET /api/dishes
```

### Toggle Publish Status

```
PATCH /api/dishes/:id
```

---

## ⚡ Real-Time Updates

The application uses **Socket.IO** to synchronize data across all connected clients. Whenever a dish is published or unpublished, every open dashboard receives the update instantly without requiring a page refresh.

---

## 📸 Preview

* Modern Dashboard
* Responsive Cards
* Publish/Unpublish Status
* Real-Time Synchronization

---

## 🎯 Assignment Objectives Covered

* ✅ Database Schema Design
* ✅ MongoDB Integration
* ✅ REST API Development
* ✅ React Dashboard
* ✅ Publish Status Toggle
* ✅ Responsive User Interface
* ✅ Real-Time Updates (Bonus)

---

## 👨‍💻 Author

**Shreyansh Gupta**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

## 📄 License

This project is developed for educational and assessment purposes.
