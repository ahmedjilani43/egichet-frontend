import type React from "react"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>My React App</h1>
        <nav>
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
