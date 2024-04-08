import Link from "next/link";

export const metadata = {
  title: "articles page",
}

export default function ArticlesPage() {
  return (
    <div style={{height: "740px"}}>
      <h1 style={{textAlign: "center", margin: "50px 0"}}>article page</h1>
      <hr />
      <Link href="/posts" ><button style={{textAlign: "center", margin: "50px auto"}}>take me to the posts page</button></Link>
    </div>
  )
}
