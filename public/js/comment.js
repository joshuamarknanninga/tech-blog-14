// public/js/comment.js
document.getElementById('comment-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const commentText = document.getElementById('comment').value.trim();
    const postId = window.location.pathname.split('/').pop(); // Assumes URL like /post/:id
  
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_text: commentText, post_id: postId }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert('Comment added successfully!');
      document.location.reload();
    } else {
      alert(data.message || 'Failed to add comment.');
    }
  });
  