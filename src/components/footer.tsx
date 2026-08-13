import { Link } from "react-router-dom"
import { navLinks } from "@/config/nav"
import { sendContactToWhatsApp } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Ubicación */}
          <div>
            <h4 className="font-bold text-lg mb-6">Ubicación</h4>
            <address className="not-italic text-sm text-gray-400 space-y-2">
              <p></p>
              <p>Peru</p>
              <p className="pt-2">+51 933 054 810</p>
            </address>
          </div>

          {/* Menus */}
          <div>
            <h4 className="font-bold text-lg mb-6">Menus</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Términos */}
          <div>
            <h4 className="font-bold text-lg mb-6">Términos</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h4 className="font-bold text-lg mb-6">Síguenos</h4>
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.647 0-3.776 2.743-7.243 7.907-7.243 4.152 0 7.379 2.957 7.379 6.913 0 4.123-2.599 7.44-6.204 7.44-1.212 0-2.35-.63-2.74-1.373l-.745 2.842c-.27 1.025-1.001 2.31-1.491 3.102 1.124.347 2.316.535 3.553.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                <a href="#" className="hover:text-white transition">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Custom Design CTA */}
          <div>
            <h4 className="font-bold text-lg mb-6">Diseños personalizados a mano</h4>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Sakura Drip es una marca de personalización. Utilizamos productos altamente
              garantizados. Si quieres un diseño diferente, puedes escribirnos a nuestro Instagram.
            </p>
            <button 
              onClick={sendContactToWhatsApp}
              className="inline-block bg-red-600 text-white font-bold py-3 px-8 text-sm uppercase tracking-widest hover:bg-red-700 transition"
            >
              Pedir diseño
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400 dark:text-gray-500">
          <p>&copy; 2026 Sakura Drip. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
