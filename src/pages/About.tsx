import { Card, CardContent, CardHeader } from "../components/ui/Card"

export function About() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Starter</h1>
          <p className="text-xl text-gray-600">Learn more about the technologies and decisions behind this template</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Why This Stack?</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                This starter template combines some of the most popular and powerful tools in the React ecosystem to
                provide a solid foundation for modern web applications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>React 18:</strong> The latest version with concurrent features
                </li>
                <li>
                  <strong>TypeScript:</strong> Type safety and better developer experience
                </li>
                <li>
                  <strong>Vite:</strong> Fast development server and optimized builds
                </li>
                <li>
                  <strong>Tailwind CSS:</strong> Utility-first styling approach
                </li>
                <li>
                  <strong>React Router:</strong> Declarative routing for React
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Project Structure</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">The project follows a clean and scalable folder structure:</p>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                {`src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Getting Started</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">To get started with this template:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Download or clone the repository</li>
                <li>
                  Install dependencies with <code className="bg-gray-100 px-2 py-1 rounded">npm install</code>
                </li>
                <li>
                  Start the development server with <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code>
                </li>
                <li>
                  Open your browser to <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:5173</code>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
