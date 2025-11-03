# 📈 Stock Broker Dashboard (Assignment 2)

A **Stock Broker Dashboard** built with **HTML, CSS, and JavaScript** that includes:
- Login and Registration pages  
- Dashboard showing live stock updates  
- A 5-stock subscription limit per user  
- Responsive UI with top bar showing user info and logout option  

---

## 🚀 Features

✅ Email + Password Registration and Login  
✅ Live Stock Price Updates every 2 seconds  
✅ Subscribe/Unsubscribe stocks (max 5 per user)  
✅ User info displayed in top right corner  
✅ Logout clears session and redirects to Login  
✅ Fully responsive layout for all screens  

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure |
| **CSS3** | Styling and layout |
| **JavaScript (ES6)** | Logic and interactivity |
| **LocalStorage** | Storing user session and subscribed stocks |

---

## 📂 Folder Structure

Assignment-2/
│
├── index.html          → Login Page.
├── register.html       → Registration Page.
├── dashboard.html      → Dashboard with stock updates
│
├── style.css           → Styling (layout, dashboard UI, responsive design)
├── script.js           → Core Logic (login, register, stock updates, limit to 5 stocks)
│
└── README.md           → Documentation and setup instructions



## 🧑‍💻 How to Run the Project

### ✅ Option 1 — Run Normally in VS Code (Recommended)
1. Open **VS Code**.  
2. Open the folder:  
   Assignment-2/
   3. Right-click on **`index.html`** → click **“Open with Live Server”**.  
4. Browser will open with the **Login Page**.  
5. You can:
- **Register a new user**, or  
- **Login** using:
  ```
  Email: admin@example.com
  Password: admin123
  ```
6. After login, you’ll be redirected to the **Dashboard**.  
7. Check/uncheck stock boxes to subscribe (max 5 allowed).  
8. Prices auto-update every 2 seconds.  
9. Click **Logout** to end the session.

> 💡 If you don’t have Live Server, install it via VS Code Extensions.

---

### 🖥️ Option 2 — Without Live Server
1. Open the folder.  
2. Double-click **`index.html`** to open in your browser.  
3. Everything works locally, including login/register via `localStorage`.

---

## ⚙️ Key Functionalities

- **Register Page**: Add new user credentials (saved in localStorage).  
- **Login Page**: Authenticate user before entering dashboard.  
- **Dashboard**:
- Displays all stocks with checkboxes.  
- Allows up to 5 active subscriptions.  
- Prices update dynamically using random generation.  
- Displays logged-in user info at top-right.  
- **Logout**: Clears session and redirects to login page.

---

## 🧠 How It Works

1. Registration stores email and password in `localStorage`.  
2. On login, user data is validated and a session is created.  
3. The dashboard fetches session info, generates random stock prices, and updates them every 2 seconds.  
4. Subscription limit (5) is enforced via JavaScript.  
5. Logout removes session and navigates back to the login screen.

---

