// public/js/edit-post.js
document.querySelector('.edit-post-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('content').value.trim();
  const postId = window.location.pathname.split('/').pop();

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (response.ok) {
    alert('Post updated successfully!');
    document.location.replace('/dashboard');
  } else {
    alert(data.message || 'Failed to update post.');
  }
});
