import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import {
  type CartItem,
  getCartItems,
  getCartTotal,
  removeFromCart,
  subscribeToCartChanges,
} from "@/lib/cart"
import { sendCartToWhatsApp } from "@/lib/whatsapp"

export function CartModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const syncCart = () => {
      setItems(getCartItems())
    }

    syncCart()
    return subscribeToCartChanges(syncCart)
  }, [])

  const total = getCartTotal()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm bg-white/10 dark:bg-black/10 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 shadow-lg z-50 overflow-y-auto transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold dark:text-white">Carrito</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">Tu carrito está vacío</p>
              <Button onClick={onClose} variant="outline">
                Continuar comprando
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {items.map((item: CartItem) => (
                  <div key={item.id} className="flex gap-4 border-b dark:border-gray-700 pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold dark:text-white">{item.name}</p>
                      <p className="text-gray-600 dark:text-gray-400">S/ {item.price}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Cantidad: {item.quantity}</p>
                      <button
                        className="text-xs underline text-gray-500 dark:text-gray-400 mt-1"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t dark:border-gray-700 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg dark:text-white">
                  <span>Total:</span>
                  <span>S/ {total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full flex items-center justify-center gap-2"
                onClick={() => sendCartToWhatsApp(items, total)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Enviar pedido por WhatsApp
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
