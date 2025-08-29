import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="py-4 bg-neutral-950 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Banco Rocks
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-primary-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary-500">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
