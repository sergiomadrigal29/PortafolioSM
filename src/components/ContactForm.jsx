import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xldnyjge");
  const [showResult, setShowResult] = useState(false);

  // Mostrar animación de éxito/error por 2.5s
  React.useEffect(() => {
    if (
      state.succeeded ||
      (state.errors && state.errors.length > 0 && !state.submitting)
    ) {
      setShowResult(true);
      const timer = setTimeout(() => setShowResult(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, state.errors, state.submitting]);

  return (
    <div className="relative">
      {/* Overlay de carga */}
      {state.submitting && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <svg
              className="animate-spin h-14 w-14 text-sky-400"
              viewBox="0 0 50 50"
            >
              <circle
                className="opacity-25"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M25 5a20 20 0 0120 20h-6a14 14 0 00-14-14V5z"
              />
            </svg>
            <span className="text-white text-lg font-semibold animate-pulse">
              Enviando mensaje...
            </span>
          </div>
        </div>
      )}

      {/* Animación de éxito */}
      {showResult && state.succeeded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 animate-bounce-in">
            <svg
              className="h-20 w-20 text-green-400 animate-pop"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="#22c55e"
              />
              <path
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12l2.5 2.5L16 9"
              />
            </svg>
            <span className="text-green-200 text-xl font-bold">
              ¡Mensaje enviado correctamente!
            </span>
          </div>
        </div>
      )}

      {/* Animación de error */}
      {showResult &&
        state.errors &&
        state.errors.length > 0 &&
        !state.submitting && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 animate-shake">
              <svg
                className="h-20 w-20 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="#ef4444"
                />
                <path
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l6 6m0-6l-6 6"
                />
              </svg>
              <span className="text-red-200 text-xl font-bold">
                Hubo un error al enviar.
                <br />
                Intenta de nuevo.
              </span>
            </div>
          </div>
        )}

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 px-2 md:px-8 py-4"
      >
        <label className="flex flex-col text-left">
          <span className="mb-1 text-[var(--azul-marino)] font-semibold">
            Nombre
          </span>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="px-4 py-2 rounded-lg bg-white text-[var(--azul-marino)] placeholder-[var(--plateado)] border border-[var(--gris-claro)] focus:outline-none focus:ring-2 focus:ring-[var(--azul-marino)] transition"
            required
          />
        </label>
        <label className="flex flex-col text-left">
          <span className="mb-1 text-[var(--azul-marino)] font-semibold">
            Correo electrónico
          </span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="tucorreo@email.com"
            className="px-4 py-2 rounded-lg bg-white text-[var(--azul-marino)] placeholder-[var(--plateado)] border border-[var(--gris-claro)] focus:outline-none focus:ring-2 focus:ring-[var(--azul-marino)] transition"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label className="flex flex-col text-left">
          <span className="mb-1 text-[var(--azul-marino)] font-semibold">
            Mensaje
          </span>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            rows={5}
            className="px-4 py-2 rounded-lg bg-white text-[var(--azul-marino)] placeholder-[var(--plateado)] border border-[var(--gris-claro)] focus:outline-none focus:ring-2 focus:ring-[var(--azul-marino)] transition resize-none"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button
          type="submit"
          disabled={state.submitting}
          className="mt-2 px-6 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          {state.submitting ? (
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
          ) : null}
          {state.submitting ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {/* Animaciones personalizadas */}
      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55); }
        @keyframes pop {
          0% { transform: scale(0.5); }
          80% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-pop { animation: pop 0.5s; }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-10px); }
          40%, 80% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.5s; }
      `}</style>
    </div>
  );
}

export default ContactForm;
