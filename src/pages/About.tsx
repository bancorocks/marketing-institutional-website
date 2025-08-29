import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Header />
      <main className="py-20 min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-500 mb-8">
            About Banco Rocks
          </h1>
          <div className="prose prose-invert max-w-3xl">
            <p className="text-xl mb-4">
              Banco Rocks is a fictional bank created for educational purposes.
              This website showcases a modern digital banking interface built
              using React, Tailwind CSS, and other contemporary web
              technologies.
            </p>
            <p className="text-gray-400">
              This project is not a real banking service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
