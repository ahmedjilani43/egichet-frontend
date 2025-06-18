import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader } from "../components/ui/Card"

interface FormData {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    alert("Thank you for your message! (This is just a demo)")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions about this starter template? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Development</h4>
                    <p className="text-gray-600">Built with modern React patterns and TypeScript</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Performance</h4>
                    <p className="text-gray-600">Optimized with Vite for fast development and builds</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Styling</h4>
                    <p className="text-gray-600">Responsive design with Tailwind CSS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="https://react.dev" className="block text-blue-600 hover:text-blue-800">
                    React Documentation →
                  </a>
                  <a href="https://vitejs.dev" className="block text-blue-600 hover:text-blue-800">
                    Vite Documentation →
                  </a>
                  <a href="https://tailwindcss.com" className="block text-blue-600 hover:text-blue-800">
                    Tailwind CSS Documentation →
                  </a>
                  <a href="https://www.typescriptlang.org" className="block text-blue-600 hover:text-blue-800">
                    TypeScript Documentation →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
