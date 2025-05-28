# Subscription_Service_API
# 📦 Subscription Service API

A microservice built with **Node.js**, **Express**, and **PostgreSQL (via Prisma ORM)** for managing user subscriptions in a SaaS platform. It follows **Clean Architecture**, uses **JWT Authentication**, and adheres to **RESTful API** standards.

---

## 🚀 Features

- 🔐 JWT-based authentication
- 📋 Plan management (create, retrieve)
- 📦 User subscription lifecycle: create, retrieve, update, cancel
- ⏱ Auto-expiration based on plan duration
- 🌐 Clean, scalable, and modular architecture
- 🧪 Input validation and error handling

---

## 🛠 Tech Stack

| Layer         | Tech Used                    |
|--------------|------------------------------|
| Language      | JavaScript (Node.js)         |
| Framework     | Express                      |
| Database      | PostgreSQL                   |
| ORM           | Prisma                       |
| Auth          | JWT                          |
| Architecture  | Clean Architecture / MVC     |
| Testing       | Postman / Hoppscotch         |

---

## 📁 Project Structure

```
subscription-service/
├── prisma/                 # Prisma schema and migrations
├── src/
│   ├── controllers/        # Request handlers
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── middlewares/        # JWT auth, error handling
│   ├── utils/              # Helper functions
│   ├── app.js              # App setup
├── .env                    # Environment variables
├── .gitignore              # Ignored files
├── package.json
├── server.js               # App entry point
```

---

## 🔧 Setup Instructions

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/Faiz694/Subscription_Service_API.git
cd Subscription_Service_API
```

### 2. 📦 Install Dependencies

```bash
npm install
```

### 3. 🛠 Set Up Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://postgres:<yourpassword>@localhost:5432/subscriptions"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

### 4. 🗃 Set Up PostgreSQL + Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. ▶️ Run the Server

```bash
npm run dev
```

Server will start at `http://localhost:5000`.

---

## 📬 API Endpoints

### 🔐 Auth (for testing)

> ⚠️ JWT implementation is basic for now. In production, connect with a real user service.

---

### 📋 Plans

| Method | Endpoint          | Description             |
|--------|-------------------|-------------------------|
| GET    | `/api/plans`      | Get all subscription plans |

---

### 📦 Subscriptions

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| POST   | `/api/subscriptions`      | Subscribe a user to a plan           |
| GET    | `/api/subscriptions/:id`  | Get a user’s subscription details    |
| PUT    | `/api/subscriptions/:id`  | Update/Change subscription plan      |
| DELETE | `/api/subscriptions/:id`  | Cancel a user’s subscription         |

✅ **All subscription routes require a JWT token in headers:**

```
Authorization: Bearer <your_token>
```

---

## 📌 Example Plan Insertion (SQL)

Use this to insert a plan:

```sql
INSERT INTO "Plan" (id, name, price, features, duration) VALUES (
  gen_random_uuid(),
  'Pro Plan',
  9.99,
  '["Unlimited Projects", "Priority Support"]',
  30
);
```

---

## 🧪 Testing

You can test APIs using [Postman](https://www.postman.com/) or [Hoppscotch](https://hoppscotch.io).

---

## 📄 License

MIT License

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---
