# 📈 Stock Broker Dashboard (Assignment 2)

A **Stock Broker Dashboard** built with **HTML, CSS, and JavaScript** that includes:
- Login and Registration pages  
- Dashboard showing live stock updates  
- A 5-stock subscription limit per user  
- Responsive UI with top bar showing user info and logout option  

---

## 🚀 Features

🔐 Register & Login using email and password.

👥 Multiple users supported simultaneously.

📈 Subscribe up to 5 stocks per user.

⚡ Real-time stock updates every second using WebSockets.

🌐 Live asynchronous updates (no refresh needed).

🎨 Modern dashboard UI with clean styling.

🚪 Logout option to end session securely.

🔁 Dynamic price simulation (random price updates per stock).

---

## 🧰 Tech Stack

| Layer                       | Technology              |
| :-------------------------- | :---------------------- |
| **Frontend**                | HTML5, CSS3, JavaScript |
| **Backend**                 | Node.js (Express)       |
| **Real-time Communication** | Socket.io               |
| **Cross-Origin Access**     | CORS Enabled            |


---

## 📂 Folder Structure
```
Assignment-2/
│
├── server.js                # Node.js backend (Express + Socket.io)
├── package.json             # Project dependencies
│
├── public/
│   ├── index.html           # Login / Register page
│   ├── dashboard.html       # User dashboard (stock display)
│   ├── style.css            # Styling for both pages
│   ├── login.js             # Handles registration & login
│   └── dashboard.js         # Manages real-time updates & subscriptions
│
├── assets/
│   └── logo.png             # Project logo used on the dashboard
│
└── README.md                # Documentation

```


## 🧑‍💻 How to Run the Project

1️⃣ Download the Project
    Go to the GitHub repository and click:
    Code → Download ZIP

2️⃣ Extract the ZIP File
    Unzip the downloaded file on your system.

3️⃣ Open the Project Folder
    Open the extracted folder in VS Code or any editor.

4️⃣ Open Terminal in the Project Directory
Make sure you are inside the root project folder (where server.js exists).

5️⃣ Install Dependencies
    Run: npm install

6️⃣ Start the Server
    Run: npm start
This will start your Node.js server.

7️⃣ Open the Dashboard
    Open your browser and go to: http://localhost:4000
---

## ⚙️ Key Functionalities

🔐 Register & Login with email and password.

👥 Multiple users supported at the same time.

📈 Subscribe up to 5 stocks per user.

⚡ Real-time stock updates every second using WebSockets.

🌐 Live asynchronous updates — no page reloads.

🎨 Modern dashboard UI with clean design.

🚪 Logout option to end session securely.

🔁 Simulated stock price updates every second.
---

## 🧠 How It Works

1. Users register or log in using email and password. 
2. Once logged in, users are redirected to the dashboard.  
3. On the dashboard:
   They can subscribe to up to 5 stocks (GOOG, TSLA, AMZN, META, NVDA).
   Subscribed stocks display current simulated prices. 
4. Every second, the server sends new random stock prices using Socket.io events.  
5. All connected users receive real-time updates instantly — asynchronously.
6. Clicking Logout clears user data and redirects to login page.

---

