// src/pages/contact/index.tsx
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 md:p-16 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Contacto y Devolución
        </h1>
        <div className="flex flex-col items-center mb-4">
          <FaWhatsapp className="text-green-500 text-3xl mb-2" />
          <p className="text-xl text-gray-600">Teléfono (Whatsapp):</p>
          <a href="https://wa.me/34614177536" className="text-lg text-blue-500">
            +34 614177536
          </a>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-gray-500 text-3xl mb-2" />
          <p className="text-xl text-gray-600">Correo:</p>
          <a
            href="mailto:hello@customwear.es"
            className="text-lg text-blue-500"
          >
            hello@customwear.es
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
