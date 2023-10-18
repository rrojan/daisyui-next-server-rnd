"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="navbar w-11/12 mx-auto bg-base-100 border-b border-b-slate-400">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          DaisyUI Test
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
          <li
            className="user-management btn btn-sm btn-neutral"
            onClick={() => router.push("/users")}
          >
            User Management
          </li>
          <li>
            <details>
              <summary>Quick Actions</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Action 1</a>
                </li>
                <li>
                  <a>Action 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
