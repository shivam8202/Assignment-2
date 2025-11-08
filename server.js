const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ----------------- Mock Database -----------------
let users = {}; // { email: { password, subscribed: [] } }
const stocks = ["GOOG", "TSLA", "AMZN", "META", "NVDA"];
let stockPrices = {};
stocks.forEach(s => stockPrices[s] = randomPrice());

function randomPrice() {
  return (Math.random() * 1000 + 100).toFixed(2);
}

// ----------------- Auth Routes -----------------
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  if (users[email]) return res.status(400).json({ msg: "User already exists" });
  users[email] = { password, subscribed: [] };
  res.json({ msg: "Registered successfully" });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users[email];
  if (!user || user.password !== password)
    return res.status(401).json({ msg: "Invalid credentials" });
  res.json({ msg: "Login success" });
});

app.post("/api/subscribe", (req, res) => {
  const { email, stock } = req.body;
  const user = users[email];
  if (!user) return res.status(400).json({ msg: "User not found" });
  if (!stocks.includes(stock))
    return res.status(400).json({ msg: "Invalid stock" });
  if (user.subscribed.includes(stock))
    return res.status(400).json({ msg: "Already subscribed" });
  if (user.subscribed.length >= 5)
    return res.status(400).json({ msg: "Max 5 stocks allowed" });
  user.subscribed.push(stock);
  res.json({ msg: "Subscribed", subscribed: user.subscribed });
});

// ----------------- Socket.io -----------------
io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("register-user", (email) => (socket.email = email));
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// ----------------- Stock Price Updater -----------------
setInterval(() => {
  stocks.forEach(s => (stockPrices[s] = randomPrice()));
  io.emit("stock-update", stockPrices);
}, 1000);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
