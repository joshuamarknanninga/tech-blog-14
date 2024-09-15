// public/js/logout.js
document.getElementById('logout').addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 204) {
      alert('You have been logged out.');
      document.location.replace('/');
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to log out.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while logging out.');
  }
});

