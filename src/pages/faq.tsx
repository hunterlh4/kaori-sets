export function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "¿Cuál es el tiempo de envío?",
      answer:
        "El tiempo de envío es de 5-7 días hábiles dentro de Colombia. Los envíos internacionales pueden tardar entre 10-15 días hábiles.",
    },
    {
      id: 2,
      question: "¿Aceptan devoluciones?",
      answer:
        "Sí, aceptamos devoluciones dentro de 30 días después de la compra si el producto llega defectuoso o dañado.",
    },
    {
      id: 3,
      question: "¿Puedo hacer un diseño personalizado?",
      answer:
        "Claro que sí, puedes contactarnos a través de Instagram para solicitar un diseño personalizado. Nuestro equipo te ayudará a crear exactamente lo que buscas.",
    },
    {
      id: 4,
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito, débito, transferencias bancarias y billeteras digitales.",
    },
    {
      id: 5,
      question: "¿Los productos son de buena calidad?",
      answer:
        "Todos nuestros productos utilizan materiales de alta calidad garantizados. Cada pieza es verificada antes de ser enviada.",
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Preguntas Frecuentes</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Aquí encontrarás las respuestas a las preguntas más comunes sobre nuestros productos y servicios.
        </p>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 cursor-pointer hover:shadow-md dark:hover:shadow-gray-800 transition"
            >
              <summary className="font-semibold text-lg flex justify-between items-center">
                {faq.question}
                <span className="ml-4">+</span>
              </summary>
              <summary className="font-semibold text-lg flex justify-between items-center dark:text-white">
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
              </summary>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
