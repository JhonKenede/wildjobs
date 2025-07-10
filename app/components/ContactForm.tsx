import { useState } from "react";
import axios from "axios";

// Definir el tipo del servicio que se pasará como prop
interface Service {
  title: string;
  description: string;
  image: string;
}

interface ContactFormProps {
  selectedService: Service | null;
}

export const ContactForm = ({ selectedService }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Construir los datos del body
    const data = {
      to: ["info@wildjobs.es"], // destinatario interno fijo
      subject: `Solicitud de presupuesto: ${selectedService?.title}`,
      html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
      <p><strong>Servicio:</strong> ${selectedService?.title}</p>
      <p><strong>Descripción:</strong> ${selectedService?.description}</p>
    `,
      clientEmail: email,
      clientName: name,
      serviceTitle: selectedService?.title || "Sin título",
    };

    console.log("🟡 Enviando datos al backend:", data);

    try {
      const response = await axios.post(
        "https://wildjobs-backend.onrender.com/api/v1/email/send",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("🟢 Respuesta del backend:", response);

      if (response.status === 200) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("🔴 Axios error:", err.response);
        setError("Ocurrió un error al enviar el correo");
      } else {
        console.error("🔴 Error desconocido:", err);
        setError("Error inesperado");
      }
    }

    setLoading(false);
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {success && (
        <p className="text-green-500 mt-4 text-center">Correo enviado ✅</p>
      )}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </form>
  );
};
