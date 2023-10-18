import Link from "next/link"

export const NotFound = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center my-16 mx-8">
      <h1>404 | Not Found</h1>
      <Link href="/" className="link">
        Take me home
      </Link>
    </div>
  )
}

export default NotFound
