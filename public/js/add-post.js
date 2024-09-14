// public/js/add-post.js
document.getElementById('new-post-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('content').value.trim();

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok) {
    alert('Post created successfully!');
    document.location.replace('/dashboard');
  } else {
    alert(data.message || 'Failed to create post.');
  }
});
