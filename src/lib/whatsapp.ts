const WA_NUMBER = "51900000000" // prefijo Perú + número

export function sendCartToWhatsApp(items: { name: string; price: number; quantity: number }[], total: number) {
  const lines = items.map((i) => `• ${i.name} x${i.quantity} — S/ ${i.price * i.quantity}`)
  const message = `Hola, quiero hacer un pedido:\n\n${lines.join("\n")}\n\nTotal: S/ ${total}`
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
}

export function sendProductToWhatsApp(name: string, price: number, quantity = 1) {
  const message = `Hola, quiero comprar:\n\n• ${name} x${quantity} — S/ ${price * quantity}`
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank")
}
