import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [position, setPosition] = useState("bottom-left");

  const showToast = ({ message, type, autoCierre = true, duracion = 5000 }) => {
    const id = Date.now();
    const newToast = { id, message, type };

    setToasts((prevToasts) => {
      const updatedToasts = [...prevToasts, newToast];
      // Limita el número de toasts a 5
      return updatedToasts.slice(-5);
    });

    if (autoCierre) {
      setTimeout(() => hideToast(id), duracion);
    }
  };

  const hideToast = (id) => {
    // Añade la clase 'cerrando' al toast antes de eliminarlo
    const toastElement = document.getElementById(`toast-${id}`);
    if (toastElement) {
      toastElement.classList.add("cerrando");
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 200); // Tiempo de la animación de cierre (200ms)
    }
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast, position, setPosition }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within an ToastContext");
   }
  return context;
};
