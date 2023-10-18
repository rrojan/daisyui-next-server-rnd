import Link from "next/link"

export default function Home() {
  return (
    <main className="px-8 py-4">
      <h1>
        <Link className="btn btn-primary" href="/users">
          User Management
        </Link>
      </h1>
    </main>
  )
}
