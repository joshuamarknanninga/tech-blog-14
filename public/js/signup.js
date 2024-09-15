// public/js/signup.js
document.getElementById('signup-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  // Input validation
  if (!username || !email || !password) {
    alert('Username, email, and password are required.');
    return;
  }

  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message); // Display success message
      document.location.replace('/dashboard');
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to sign up.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while signing up.');
  }
});
