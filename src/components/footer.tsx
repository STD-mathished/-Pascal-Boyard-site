import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Section Liens Rapides */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Liens Rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-300">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-300">
                Qui sommes-nous?
              </Link>
            </li>
            <li>
              <Link to="/production" className="hover:text-white transition-colors duration-300">
                Production
              </Link>
            </li>
            <li>
              <Link to="/Abeilles" className="hover:text-white transition-colors duration-300">
                Abeilles
              </Link>
            </li>
            <li>
              <Link to="/evenements" className="hover:text-white transition-colors duration-300">
                Evenements
              </Link>
            </li>
          </ul>
        </div>

        {/* Partenaires */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Nos partenaires</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://ferme-de-coubertin.fr/" className="hover:text-white transition-colors duration-300">
                La ferme de coubertin
              </a>
            </li>
            <li>
              <a href="http://www.fermedelevagegrandmaison.fr/" className="hover:text-white transition-colors duration-300">
                La ferme de la grande maison
              </a>
            </li>
            <li>
              <a href="https://www.lafermedarmenon.com/" className="hover:text-white transition-colors duration-300">
                La ferme d'armenon
              </a>
            </li>
          </ul>
        </div>

        {/* Section Mentions Légales */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Informations</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-white transition-colors duration-300">
                Mentions Légales
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white transition-colors duration-300">
                Politique de Confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Section Contact */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contactez-nous</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Mail size={20} />
              <span>pascal.boyard@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+33 1 23 45 67 89</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>123 Rue de la Ruche, Ville, France</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Abeille urpoise. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
