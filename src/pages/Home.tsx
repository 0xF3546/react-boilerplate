import {
  FaCode,
  FaPaintBrush,
  FaBolt,
  FaRoute,
  FaShieldAlt,
  FaCubes,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-indigo-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            React Boilerplate
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Kickstart your projects with a modern, lightweight React starter
            template featuring TypeScript, Tailwind CSS, Vite, and more.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/0xF3546/react-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/0xF3546/react-boilerplate#installation"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-500 text-indigo-300 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 hover:text-white transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose this Boilerplate for your Project?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1: TypeScript */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaCode className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                TypeScript
              </h3>
              <p className="text-gray-400">
                Fully typed with TypeScript for enhanced developer experience and
                fewer bugs.
              </p>
            </div>
            {/* Feature 2: Tailwind CSS */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaPaintBrush className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                Tailwind CSS
              </h3>
              <p className="text-gray-400">
                Utility-first CSS framework for fast, customizable UI
                development.
              </p>
            </div>
            {/* Feature 3: Vite */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaBolt className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                Vite
              </h3>
              <p className="text-gray-400">
                Blazing-fast development and build times with Vite’s modern
                tooling.
              </p>
            </div>
            {/* Feature 4: React Router */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaRoute className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                React Router
              </h3>
              <p className="text-gray-400">
                Seamless navigation for building dynamic single-page
                applications.
              </p>
            </div>
            {/* Feature 5: Code Quality */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaShieldAlt className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                Code Quality
              </h3>
              <p className="text-gray-400">
                ESLint and Prettier pre-configured for clean, consistent code.
              </p>
            </div>
            {/* Feature 6: Scalable */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaCubes className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                Scalable
              </h3>
              <p className="text-gray-400">
                Organized structure to support projects of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Building Today
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-gray-300">
            Clone the repository and build your next React application with a
            solid foundation.
          </p>
          <a
            href="https://github.com/0xF3546/react-boilerplate#installation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-gray-400">
            Created by{" "}
            <a
              href="https://github.com/0xF3546"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              0xF3546
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/0xF3546/react-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              GitHub Repository
            </a>
          </p>
          <p className="text-sm text-gray-500">
            MIT License © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}