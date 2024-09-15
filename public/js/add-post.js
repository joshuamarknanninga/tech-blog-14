// public/js/add-post.js
document.getElementById('new-post-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('content').value.trim();

  // Input validation
  if (!title || !content) {
    alert('Title and content are required.');
    return;
  }

  try {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Post created successfully!');
      document.location.replace('/dashboard');
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to create post.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while creating the post.');
  }
});
