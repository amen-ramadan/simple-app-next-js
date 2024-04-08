
import React from 'react'
export default async function PostDetails({ postId }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { next: { revalidate: 120 } })
  const post = await response.json();

  return (
      <div className="post-container">
        <div className="post-number">{postId}</div>
        <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      </div>
  )
}
