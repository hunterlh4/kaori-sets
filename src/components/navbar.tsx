import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "@/config/nav"
import { CartModal } from "./cart-modal"
import { ThemeToggle } from "./theme-toggle"
import { getCartCount, getCartTotal, subscribeToCartChanges } from "@/lib/cart"

export function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const hasItems = cartCount > 0

  useEffect(() => {
    const syncCount = () => {
      setCartCount(getCartCount())
      setCartTotal(getCartTotal())
    }

    syncCount()
    return subscribeToCartChanges(syncCount)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-950 bg-opacity-95 shadow-sm dark:shadow-gray-800">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="text-2xl font-bold tracking-widest text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 transition-colors">
            SAKURA DRIP
          </Link>

          {/* Navigation Links and Icons */}
          <div className="flex items-center space-x-8">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cart and Search Icons */}
            <div className="flex items-center space-x-6">
              {/* Cart Icon */}
              <div
                className="relative cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors"
                onClick={() => setIsCartOpen(true)}
                title={`Items: ${cartCount} | Total: ${cartTotal} S/`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span
                  className={`absolute -top-2 -right-2 text-[10px] rounded-full h-4 min-w-4 px-1 flex items-center justify-center font-bold ${
                    hasItems
                      ? "bg-red-600 text-white dark:bg-red-500 dark:text-white"
                      : "bg-black dark:bg-white text-white dark:text-black"
                  }`}
                >
                  {cartCount}
                </span>
              </div>

              {/* Search Icon */}
              <div className="cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

