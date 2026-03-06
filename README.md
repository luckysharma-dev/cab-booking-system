# 🚖 Ucab — Cab Booking System

> A full-stack ride-hailing web application inspired by the concept of seamless urban mobility, built with a unique brand identity and modern tech stack.

![Ucab Banner](./backend/backend/cab-frontend/src/assets/ucab_hero.png)

---

## ✨ Features

### 👤 User Side
- 🔐 **Register & Login** — Secure JWT-based authentication
- 🚕 **Book a Ride** — Select cab type (Car / Auto / Bike), enter pickup & drop locations
- 💰 **Fare Estimation** — Real-time fare calculator with discount code support
- 🍱 **Ride Extras** — Add refreshments and charity donations to rides
- 📋 **Ride History** — View all past and active rides with status badges
- 💳 **Payment Gateway** — Simulated Stripe-style checkout with card UI
- 🌐 **Language Switcher** — Toggle between English 🇬🇧 and Hindi 🇮🇳

### 🛡️ Admin Side
- 🔑 **Admin Portal** — Separate login & dashboard for administrators
- 📊 **Dashboard Overview** — Stats for total rides, drivers, cars, and payments
- 🧑‍✈️ **Driver Registration** — Register new drivers directly from the admin portal
- 📜 **Rides / Payments / Cars History** — Full tabular views of all data

### ⚙️ Backend Intelligence
- 🤖 **Auto-Assign Driver** — When a ride is booked, an available driver is automatically matched based on cab type
- 📍 **Change City** — Users can set their city on the dashboard (persisted via localStorage)
- 📄 **About / Blog Page** — Two promotional blogs promoting the Ucab platform

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + Vite |
| **Routing** | React Router v6 |
| **Styling** | Vanilla CSS + Bootstrap 5 |
| **Fonts** | Google Fonts — Outfit |
| **i18n** | react-i18next (EN / HI) |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB + Mongoose |
| **Auth** | JWT (JSON Web Tokens) + bcryptjs |
| **API Client** | Axios |

---

## 🗂️ Project Structure

```
cab-booking-system/
├── backend/
│   └── backend/
│       ├── controllers/        # Business logic (ride, driver, fare, admin, payment)
│       ├── models/             # Mongoose schemas (User, Driver, Ride, Payment)
│       ├── routes/             # Express API routes
│       ├── middleware/         # JWT auth middleware
│       ├── server.js           # Main Express app
│       └── cab-frontend/       # React frontend (Vite)
│           └── src/
│               ├── pages/      # Dashboard, Login, BookRide, Payment, History, About, Admin
│               ├── components/ # Navbar
│               ├── services/   # Axios API service
│               └── i18n.js     # Language translations
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/luckysharma-dev/cab-booking-system.git
cd cab-booking-system
```

### 2. Setup Backend
```bash
cd backend/backend
npm install
```

Create a `.env` file inside `backend/backend/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd backend/backend/cab-frontend
npm install
npm run dev
```

The app will be available at **http://localhost:5173**

---

## 🔑 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/drivers/register` | Register a new driver |
| POST | `/api/drivers/login` | Login driver |
| GET | `/api/rides/user-history` | Get user ride history |
| POST | `/api/rides/book` | Book a new ride (auto-assigns driver) |
| POST | `/api/payments/pay` | Process payment for a ride |
| GET | `/api/admin/dashboard` | Admin: get all stats |
| POST | `/api/admin/login` | Admin login |

---

## 🎨 Brand Identity

Ucab has its own distinct visual identity — **not a copy of Uber**:

- 🟣 **Primary Color**: Deep Purple `#302b63`
- 🩵 **Accent**: Electric Teal `#38f9d7`
- 🖋️ **Font**: [Outfit](https://fonts.google.com/specimen/Outfit) — Modern & rounded
- 🌌 **Background**: Soft Lavender `#f8f5ff`
- 🌟 **Navbar**: Purple gradient with glowing teal logo

---

## 📸 Screenshots

| Dashboard | Booking | Admin |
|---|---|---|
| Teal gradient hero with city selector | Full booking form with cab types | Driver management & stats |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT © [Lucky Sharma](https://github.com/luckysharma-dev)
