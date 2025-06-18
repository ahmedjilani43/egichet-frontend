import type React from "react"
import Card from "../components/Card"

const Home: React.FC = () => {
  return (
    <main className="home">
      <div className="container">
        <section className="hero">
          <h1>Welcome to E-Gichet</h1>
          <p>A simple React TypeScript application</p>
          <button className="btn btn-primary btn-large">Get Started</button>
        </section>

        <section className="features">
          <Card title="Fast" description="Built with Vite for speed" />
          <Card title="Modern" description="Uses React 18 & TypeScript" />
          <Card title="Simple" description="Clean and easy to use" />
        </section>
      </div>
    </main>
  )
}

export default Home
