import Link from "next/link";
import "./posts.css";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const posts = await response.json();
  const postsJsx = posts.map((post, index) => {
    return (
      <Link key={post.id} href={`/posts/${post.id}`}>
        <div className="post-container">
          <div className="post-number">{index + 1}</div>
          <div className="post-content">
            <h4 className="post-title">{post.title}</h4>
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <h1 className="page-title">Posts Page</h1>

      <div className="posts-wrapper">{postsJsx}</div>

      {/* <div><Todo /></div> */}
    </>
  );
}
