"use client"

import Link from "next/link"

const Error = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center my-16 mx-8">
      <h1>500 | Something went horribly wrong</h1>
      <h3>Our servers are probably on fire right now</h3>
      <Link href="/" className="link">
        Take me home
      </Link>
    </div>
  )
}

export default Error
