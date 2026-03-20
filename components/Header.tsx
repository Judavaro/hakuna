import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0 font-bold text-xl text-blue-600">
          Hakuna
        </div>

        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="#destinos" className="text-gray-700 hover:text-blue-600">
              Destinos
            </Link>
            <Link href="#paquetes" className="text-gray-700 hover:text-blue-600">
              Paquetes
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-blue-600">
              Contacto
            </Link>
            <Link
              href="/login"
              className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}