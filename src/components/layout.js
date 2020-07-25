import React from "react"
import Sidebar from './sidebar'

export default function Layout({ children }) {
  return (
    <div>
        <Sidebar></Sidebar>
      {/* Page content */}
      <div className="main">{children}</div>
    </div>
  )
}
