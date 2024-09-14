// public/js/delete-post.js
document.querySelector('.delete-post-btn').addEventListener('click', async (event) => {
  event.preventDefault();

  const postId = window.location.pathname.split('/').pop();

  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (!confirmDelete) return;

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Post deleted successfully!');
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete post.');
  }
});
