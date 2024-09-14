// public/js/logout.js
document.getElementById('logout').addEventListener('click', async (event) => {
  event.preventDefault();

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 204) {
    alert('You have been logged out.');
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
});
