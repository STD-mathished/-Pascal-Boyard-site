import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo ou titre */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-yellow-600 transition-colors duration-300">
            Abeille urpoise
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu principal sur grand écran */}
        <div className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <Link to="/" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300">
            Accueil
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300">
            Qui sommes-nous ?
          </Link>
          <Link to="/production" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300">
            Production
          </Link>
          <Link to="/abeilles" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300">
            Abeilles
          </Link>
          <Link to="/evenements" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300">
            Événements
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-yellow-600 font-medium transition-colors duration-300">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}