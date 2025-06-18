export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">React Starter</h3>
            <p className="text-gray-600 text-sm">
              A modern React TypeScript starter template with Vite, Tailwind CSS, and React Router.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://react.dev" className="hover:text-gray-900">
                  React Docs
                </a>
              </li>
              <li>
                <a href="https://vitejs.dev" className="hover:text-gray-900">
                  Vite Docs
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com" className="hover:text-gray-900">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © 2024 React Starter. Built with React, TypeScript, and Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}
