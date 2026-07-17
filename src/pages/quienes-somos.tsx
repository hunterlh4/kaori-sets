export function QuienesSomos() {
  return (
    <div className="container mx-auto px-6 py-12 pt-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 dark:text-white">Quiénes Somos</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Somos una marca 100% colombiana dedicada a la creación de piezas de arte usable hechas a mano.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Nuestra Misión</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Crear piezas de arte usable de alta calidad que reflejen la creatividad, pasión y
              dedicación de nuestro equipo. Cada prenda es única y hecha con amor para ti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Nuestra Visión</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ser la marca referente de personalización y arte usable en Colombia y el mundo,
              reconocida por la calidad de nuestros productos y el servicio personalizado que
              ofrecemos a cada cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">¿Por qué elegirnos?</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✓</span>
                <span>
                  <strong>Calidad Premium:</strong> Utilizamos materiales de la más alta calidad
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✓</span>
                <span>
                  <strong>Hecho a Mano:</strong> Cada pieza es creada manualmente con atención al
                  detalle
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✓</span>
                <span>
                  <strong>Personalización:</strong> Puedes pedir diseños personalizados según tus
                  preferencias
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✓</span>
                <span>
                  <strong>Envío Rápido:</strong> Entrega en 5-7 días hábiles dentro de Colombia
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-3">✓</span>
                <span>
                  <strong>Apoyo Local:</strong> Somos una empresa 100% colombiana que apoya la
                  economía local
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Ubicación</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Florencia, Colombia</strong>
            </p>
            <p className="text-gray-700">
              Puedes contactarnos en <strong>+57 316 489 0901</strong> o a través de nuestras
              redes sociales.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
