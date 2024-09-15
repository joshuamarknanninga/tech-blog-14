// public/js/comment.js
document.getElementById('comment-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const commentText = document.getElementById('comment').value.trim();
  const postId = window.location.pathname.split('/').pop(); // Assumes URL like /post/:id

  // Input validation
  if (!commentText) {
    alert('Comment text is required.');
    return;
  }

  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_text: commentText, post_id: postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Comment added successfully!');
      document.location.reload();
    } else {
      const data = await response.json();
      alert(data.message || 'Failed to add comment.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while adding the comment.');
  }
});

  