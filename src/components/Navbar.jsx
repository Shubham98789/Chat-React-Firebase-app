import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <span className="logo">Lama Chat</span>
        <div className="user">
          <img src="https://images.unsplash.com/photo-1604004215402-e0be233f39be?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  " alt="" />
          <span>John</span>
          <button>Logout</button>
        </div>
      </div>
    </div>
  )
}
