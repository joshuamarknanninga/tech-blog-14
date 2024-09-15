// public/js/login.js
document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  // Input validation
  if (!username || !password) {
    alert('Username and password are required.');
    return;
  }

  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message); // Display success message
      document.location.replace('/dashboard');
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to log in.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while logging in.');
  }
});

