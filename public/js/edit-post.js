// public/js/edit-post.js
document.querySelector('.edit-post-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('content').value.trim();
  const postId = window.location.pathname.split('/').pop();

  // Input validation
  if (!title || !content) {
    alert('Title and content are required.');
    return;
  }

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Post updated successfully!');
      document.location.replace('/dashboard');
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to update post.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while updating the post.');
  }
});

