const socket = io();
let userEmail = "";


function toggleAuth(mode) {
  if (mode === "register") {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("authTitle").textContent = "Register";
  } else {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("authTitle").textContent = "Login";
  }
}


async function registerUser() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  alert(data.msg);
  if (res.ok) toggleAuth("login");
}

async function loginUser() {
  const email = document.getElementById("logEmail").value;
  const password = document.getElementById("logPass").value;
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (res.ok) {
    document.getElementById("auth-container").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("userEmail").textContent = email;
    userEmail = email;
    socket.emit("register-user", email);
  } else alert(data.msg);
}

function logout() {
  userEmail = "";
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("auth-container").classList.remove("hidden");
  toggleAuth("login");
}


async function subscribeStock() {
  const stock = document.getElementById("stockSelect").value;
  if (!stock) return alert("Select a stock!");

  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, stock })
  });
  const data = await res.json();
  if (!res.ok) {
    alert(data.msg);
    if (data.msg.includes("Max"))
      document.getElementById("limitMsg").classList.remove("hidden");
  } else {
    document.getElementById("limitMsg").classList.add("hidden");
    renderSubscribed(data.subscribed);
  }
}


socket.on("stock-update", (prices) => {
  const list = document.getElementById("subscribedList");
  Array.from(list.children).forEach(div => {
    const stock = div.dataset.stock;
    if (prices[stock]) div.textContent = `${stock}: $${prices[stock]}`;
  });
});


function renderSubscribed(stocks) {
  const list = document.getElementById("subscribedList");
  list.innerHTML = "";
  stocks.forEach(s => {
    const div = document.createElement("div");
    div.dataset.stock = s;
    div.textContent = `${s}: --`;
    list.appendChild(div);
  });
}

