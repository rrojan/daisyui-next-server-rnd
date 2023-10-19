import Link from "next/link"

export default function Home() {
  return (
    <main className="px-8 py-4">
      <Link href="/users">Users Management</Link>
      <Link href="/posts">Posts Management</Link>
    </main>
  )
}
