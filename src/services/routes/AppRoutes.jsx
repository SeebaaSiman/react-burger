import { Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import Menu from "../../views/Menu";
import Product from "../../views/Product";
import Login from "../../views/Login";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../../views/NotFound";
import Payment from "../../views/Payment";
import { useEffect, useState } from "react";
import { menuCategories } from "../db/menu-data";

import addCartIcon from "../../assets/icons/cart-add.svg";
import promoCartIcon from "../../assets/icons/cart-promo.svg";
import removeCartIcon from "../../assets/icons/cart-menos.svg";
import clearCartIcon from "../../assets/icons/cart-delete.svg";

export default function AppRoutes() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(menuCategories);
      }, 4000); // simula 4 segundo de demora
    })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Error fetching menu categories", error);
        setError(true);
        setIsLoading(false);
      });
  }, []);

  // Lógica para el carrito. Luego será un useReducer
  // Se agregarán mensajes de éxito o error al agregar o quitar productos
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((prod) => prod.id === item.id);
      if (exists) {
        // Si ya existe, suma 1 a la cantidad
        return prevCart.map((prod) => (prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod));
      }
      // Si no existe, lo agrega con cantidad 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
    alert("Producto agregado al carrito");
  };
  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((prod) => prod.id !== item.id));
  };
  const handleAddQuantity = (item) => {
    setCart((prevCart) =>
      prevCart.map((prod) => (prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod))
    );
  };
  const handleDeleteQuantity = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((prod) => (prod.id === item.id ? { ...prod, quantity: prod.quantity - 1 } : prod))
        .filter((prod) => prod.quantity > 0)
    );
  };
  const handleClearCart = () => {
    setCart([]);
    alert("Carrito vaciado");
  };
  //* Luego será un hook useCartType para usar dentro del componente ButtonCart
  const cartButtonTypes = {
    add: {
      text: "Agregar",
      icon: addCartIcon,
      alt: "Agregar al carrito",
      fn: handleAddToCart,
    },
    remove: {
      text: "Quitar",
      icon: clearCartIcon,
      alt: "Quitar del carrito",
      fn: handleRemoveFromCart,
    },
    add_quantity: {
      text: "Sumar",
      icon: promoCartIcon,
      alt: "Sumar cantidad",
      fn: handleAddQuantity,
    },
    delete_quantity: {
      text: "Restar",
      icon: removeCartIcon,
      alt: "Restar cantidad",
      fn: handleDeleteQuantity,
    },
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            products={products}
            error={error}
            isLoading={isLoading}
            cart={cart}
            cartButtonTypes={cartButtonTypes}
            handleClearCart={handleClearCart}
          />
        }
      />
      <Route
        path='/menu'
        element={
          <Menu
            products={products}
            error={error}
            cart={cart}
            cartButtonTypes={cartButtonTypes}
            handleClearCart={handleClearCart}
          />
        }
      />
      <Route path='/product/:id' element={<Product products={products} cartButtonTypes={cartButtonTypes} />} />
      <Route path='/login' element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path='/payment' element={<Payment />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
