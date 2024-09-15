// public/js/delete-post.js
document.querySelector('.delete-post-btn').addEventListener('click', async (event) => {
  event.preventDefault();

  const postId = window.location.pathname.split('/').pop();

  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (!confirmDelete) return;

  try {
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Post deleted successfully!');
      document.location.replace('/dashboard');
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to delete post.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while deleting the post.');
  }
});
