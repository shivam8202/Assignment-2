
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const confirm = document.getElementById('regConfirm').value.trim();

    if (!email || !password) return alert("Please enter email and password");
    if (password !== confirm) return alert("Passwords do not match");

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
      alert("User already registered!");
      return (window.location.href = "index.html");
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "index.html";
  });
}


const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(u => u.email === email && u.password === password);
    if (!validUser) return alert("Invalid credentials!");

    localStorage.setItem('currentUser', JSON.stringify({ email }));
    window.location.href = "dashboard.html";
  });
}


if (window.location.pathname.includes("dashboard.html")) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    alert("Please login first!");
    window.location.href = "index.html";
  }

  document.getElementById('userEmail').innerText = currentUser.email;
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
  });

  const allStocks = {
    AAPL: 180.54, GOOG: 142.23, TSLA: 220.75,
    AMZN: 155.62, MSFT: 312.18, META: 293.41, NVDA: 472.66
  };
  let selectedStocks = {};

  const checkboxContainer = document.getElementById('stockCheckboxes');
  for (let s in allStocks) {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${s}"> ${s}`;
    checkboxContainer.appendChild(label);
  }

 
  checkboxContainer.addEventListener('change', (e) => {
    if (!e.target || e.target.tagName !== 'INPUT') return;
    const symbol = e.target.value;

    if (e.target.checked) {
      if (Object.keys(selectedStocks).length >= 5) {
        e.target.checked = false;
        alert("You can only subscribe to 5 stocks at a time!");
        return;
      }
      selectedStocks[symbol] = allStocks[symbol];
    } else {
      delete selectedStocks[symbol];
    }
    renderStocks();
  });

  function updatePrices() {
    for (let s in allStocks) {
      const delta = (Math.random() - 0.5) * 2;
      allStocks[s] = +(allStocks[s] + delta).toFixed(2);
    }
    renderStocks();
  }

  function renderStocks() {
    const tbody = document.getElementById('stockTableBody');
    tbody.innerHTML = '';

    if (Object.keys(selectedStocks).length === 0) {
      tbody.innerHTML = `<tr><td colspan="2" class="muted">No stocks selected</td></tr>`;
      return;
    }

    for (let s in selectedStocks) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${s}</td><td>${allStocks[s]}</td>`;
      tbody.appendChild(tr);
    }
  }

  renderStocks();
  setInterval(updatePrices, 2000);
}
