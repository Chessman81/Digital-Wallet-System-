# Digital Wallet System Backend

A RESTful backend for a digital wallet platform, built with *Node.js, **Express, and **MongoDB*.  
Features secure authentication, wallet operations, transaction processing, fraud detection, admin analytics, and automated reporting.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Core Endpoints](#core-endpoints)
- [Fraud Detection](#fraud-detection)
- [Admin & Reporting](#admin--reporting)
- [Soft Delete](#soft-delete)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- *User Registration & Login* (JWT authentication)
- *Wallet Management:* Multi-currency, deposit, withdraw, transfer
- *Transaction History:* Per-user, with soft delete
- *Atomic Transaction Processing:* Secure, consistent fund handling
- *Fraud Detection:* Rate limiting, anomaly flagging, scheduled scans
- *Mock Email Alerts:* For suspicious transactions
- *Admin APIs:* Flagged transactions, aggregate balances, top users
- *Swagger/OpenAPI Docs:* Interactive API documentation

---

## Tech Stack

- *Node.js* & *Express*
- *MongoDB* & *Mongoose*
- *JWT* for authentication
- *bcrypt* for password hashing
- *node-cron* for scheduled jobs
- *Swagger UI* for API docs

---

## Getting Started


### 1. Install Dependencies

bash
npm install


### 2. Configure Environment Variables

Create a .env file:


PORT=3000
MONGO_URI=mongodb://localhost:27017/wallet-system
JWT_SECRET=your_jwt_secret


### 3. Start MongoDB

- *Local:* mongod
- *Atlas:* Use your Atlas connection string in .env

### 4. Start the Server

bash
npm start


Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) for Swagger UI.

---

## API Documentation

- All endpoints are documented with Swagger/OpenAPI.
- Access docs at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Core Endpoints

| Method | Endpoint                        | Description                       |
|--------|---------------------------------|-----------------------------------|
| POST   | /api/auth/register            | Register a new user               |
| POST   | /api/auth/login               | Login, receive JWT token          |
| GET    | /api/wallet                   | Get your wallet balances          |
| POST   | /api/transaction/deposit      | Deposit funds                     |
| POST   | /api/transaction/withdraw     | Withdraw funds                    |
| POST   | /api/transaction/transfer     | Transfer funds to another user    |
| GET    | /api/transaction/history      | Your transaction history          |
| DELETE | /api/transaction/:id          | Soft-delete a transaction         |

> *Note:* All wallet/transaction endpoints require a JWT token in the Authorization header.

---

## Fraud Detection

- *Rate Limiting:* 10 requests/minute per user
- *Anomaly Rules:*  
  - More than 3 transfers in 1 minute
  - Withdrawals over $1000
- *Flagged transactions* are visible to admins and trigger mock email alerts
- *Daily scheduled scan:* Flags missed suspicious transactions

---

## Admin & Reporting

| Method | Endpoint                  | Description                        |
|--------|--------------------------|------------------------------------|
| GET    | /api/admin/flagged     | List flagged transactions          |
| GET    | /api/admin/aggregate   | Total balances by currency         |
| GET    | /api/admin/top-users   | Top users by balance               |

> Only users with isAdmin: true can access these endpoints.

---

## Soft Delete

- Users and transactions are soft-deleted (not removed from DB)
- All queries filter out soft-deleted records by default




*Questions?*  
Open an issue or contact [meherpk17@gmail.com](mailto:meherpk17@gmail.com)

