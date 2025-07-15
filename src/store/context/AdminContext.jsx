import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "./ToastContext";

const AdminContext = createContext();

const mockapiUrl = "https://6842291ee1347494c31bfe4b.mockapi.io/rb/menu-products";

export function AdminProvider({ children }) {
  const [mockapiProducts, setMockapiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    fetch(mockapiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setMockapiProducts(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(true);
        setLoading(false);
      });
  }, []);
  const refreshProducts = async () => {
    try {
      const res = await fetch(mockapiUrl);
      const data = await res.json();
      setMockapiProducts(data);
    } catch (error) {
      console.log("Error al cargar productos", error);
    }
  };
  const createProduct = async (product) => {
    try {
      const resp = await fetch(mockapiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!resp.ok) {
        throw new Error("Error al agregar producto");
      }
      showToast({ message: `Producto agregado correctamente`, type: "success" });
      refreshProducts();
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteProduct = async (id) => {
    const agree = window.confirm("Estas seguro de eliminar el producto?");
    if (agree) {
      try {
        const resp = await fetch(`https://6842291ee1347494c31bfe4b.mockapi.io/rb/menu-products/${id}`, {
          method: "DELETE",
        });
        if (!resp.ok) throw Error("Error al eliminar", Error);
        alert("Producto eliminado correctamente");
        refreshProducts();
      } catch (error) {
        alert("No es posible eliminar el producto ", error);
      }
    }
  };
  const updateProduct = async (product) => {
    const currentProduct = mockapiProducts.find((p) => p.id === product.id);
    if (
      currentProduct &&
      currentProduct.name === product.name &&
      currentProduct.price === product.price &&
      currentProduct.image === product.image &&
      currentProduct.description === product.description
    ) {
      showToast({ message: `No hay cambios para actualizar`, type: "info" });

      setClickedItem(null);
      return;
    }
    try {
      const resp = await fetch(`${mockapiUrl}/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!resp.ok) throw Error("Error al actualizar el producto");
      showToast({ message: `Producto actualizado correctamente`, type: "success" });
      setClickedItem(null);
      refreshProducts();
    } catch (error) {
      console.log(error.message);
    }
  };
  const onModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const contextValue = {
    loading,
    error,
    mockapiProducts,
    onModal,
    onCloseModal,
    openModal,
    setClickedItem,
    clickedItem,
    updateProduct,
    deleteProduct,
    createProduct,
  };
  return <AdminContext.Provider value={contextValue}>{children}</AdminContext.Provider>;
}

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminContext");
  }
  return context;
};
