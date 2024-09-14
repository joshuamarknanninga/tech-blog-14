// public/js/login.js
document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok) {
    alert(data.message); // Display success message
    document.location.replace('/dashboard');
  } else {
    alert(data.message || 'Failed to log in.');
  }
});
