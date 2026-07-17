export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

const CART_STORAGE_KEY = "sakura_drip_cart"
const CART_UPDATED_EVENT = "cart-updated"

function isCartItem(item: unknown): item is CartItem {
  if (typeof item !== "object" || item === null) {
    return false
  }

  const candidate = item as Partial<CartItem>
  return (
    typeof candidate.id === "number" &&
    typeof candidate.name === "string" &&
    typeof candidate.price === "number" &&
    typeof candidate.image === "string" &&
    typeof candidate.quantity === "number"
  )
}

function isCartItemArray(items: unknown): items is CartItem[] {
  return Array.isArray(items) && items.every((item) => isCartItem(item))
}

export function getCartItems(): CartItem[] {
  const raw = localStorage.getItem(CART_STORAGE_KEY)
  if (!raw) {
    return []
  }

  try {
    const parsed: unknown = JSON.parse(raw)
    if (isCartItemArray(parsed)) {
      return parsed
    }
  } catch {
    return []
  }

  return []
}

export function saveCartItems(items: CartItem[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(CART_UPDATED_EVENT))
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const items = getCartItems()
  const existingItem = items.find((cartItem) => cartItem.id === item.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    items.push({ ...item, quantity: 1 })
  }

  saveCartItems(items)
}

export function getCartCount(): number {
  return getCartItems().reduce((acc, item) => acc + item.quantity, 0)
}

export function getCartTotal(): number {
  return getCartItems().reduce((acc, item) => acc + item.price * item.quantity, 0)
}

export function removeFromCart(id: number) {
  const items = getCartItems().filter((item) => item.id !== id)
  saveCartItems(items)
}

export function subscribeToCartChanges(callback: () => void) {
  const handleCartUpdate = () => callback()
  const handleStorage = (event: StorageEvent) => {
    if (event.key === CART_STORAGE_KEY) {
      callback()
    }
  }

  window.addEventListener(CART_UPDATED_EVENT, handleCartUpdate)
  window.addEventListener("storage", handleStorage)

  return () => {
    window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdate)
    window.removeEventListener("storage", handleStorage)
  }
}
