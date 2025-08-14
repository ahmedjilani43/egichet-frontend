import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import React from "react"
const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-8 px-6">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
          <div className="flex justify-center mt-16 text-sm font-bold">
            <img src="/icon white.png" alt="E-Ticket Icon" className="h-30 w-auto object-contain" />
          </div>
          <div className="mb-3 text-sm text-left">
            <div className="space-y-2 text-sm text-left">
              <p className="font-bold">Qui sommes-nous ?</p>
              <p>E-Ticket est votre partenaire pour</p>
              <p>réserver et vivre les meilleurs</p>
              <p>événements en Tunisie.</p>
              <p className="font-semibold mt-3">Comment ça marche ?</p>
              <p>Service client disponible 7/7,</p>
              <p>24h sur 24h</p>
              <p>contact@eticket.tn</p>
              <p>Tunis, Tunisie</p>
            </div>
            <div className="flex space-x-3 mt-4 ">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

          </div>

          <div className="font-semibold mt-6">
            <h3 className="font-bold mb-3 text-xm text-left">À propos</h3>
            <ul className="space-y-2 text-sm text-left">
              <li><a href="/terms" className="hover:text-gray-300">Termes et conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">La liste de nos partenaires</a></li>
              <li><a href="signin" className="hover:text-gray-300">Se connecter</a></li>
              <li><a href="/signup" className="hover:text-gray-300">Créer un compte</a></li>
              <li><a href="#" className="hover:text-gray-300">Contactez nous</a></li>
            </ul>
          </div>

          <div className="font-semibold mt-6">
            <h3 className="font-bold mb-3 text-xm text-left">Pages</h3>
            <ul className="space-y-1 text-sm text-left">
              <li><a href="#" className="hover:text-gray-300 font-semibold">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Publier vos événements</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Suivez vos ventes</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Connexion organisateur</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Services</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Blog</a></li>
            </ul>
          </div>

          <div className="font-semibold mt-6">
            <h3 className="font-bold mb-3 text-xm text-left">Espace Pro</h3>
            <ul className="space-y-1 text-sm text-left">
              <li><a href="#" className="hover:text-gray-300 font-semibold">Publier vos événements</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Suivez vos ventes</a></li>
              <li><a href="#" className="hover:text-gray-300 font-semibold">Connexion organisateur</a></li>
            </ul>
          </div>

          <div className="font-semibold mt-6">
            <h3 className="font-bold mb-3 text-xm text-left">Catégories</h3>
            <ul className="space-y-1 text-sm text-left">
              <li><a href="#" className="hover:text-gray-300">Festival International de Carthage</a></li>
              <li><a href="#" className="hover:text-gray-300">Festivals</a></li>
              <li><a href="#" className="hover:text-gray-300">Les rencontres où on jam</a></li>
              <li><a href="#" className="hover:text-gray-300">Festival Electronique</a></li>
              <li><a href="#" className="hover:text-gray-300">Clubbing</a></li>
            </ul>
          </div>
        </div>
        <div className="my-4 border-t border-primary w-full"></div>
        <div className="border-t border-secondary pt-4 text-center text-xs">
          <p>© 2025 E-Ticket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
