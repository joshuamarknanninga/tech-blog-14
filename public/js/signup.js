// public/js/signup.js
document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
  
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert(data.message); // Display success message
      document.location.replace('/dashboard');
    } else {
      alert(data.message || 'Failed to sign up.');
    }
  });
  