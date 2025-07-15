import { createContext, useState, useContext, useEffect } from "react";
import { menuCategories } from "../../services/db/menu-data";
const MenuContext = createContext(null);
export const MenuProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(menuCategories);
      }, 1000); // simula 1 segundo de demora
    })
      .then((data) => {
        setProducts(data);
        const items = data.flatMap((cat) => cat.items);
        setAllItems(items);
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Error fetching menu categories", error);
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const contextValue = {
    products,
    error,
    isLoading,
    allItems,
  };

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within an MenuProvider");
  }
  return context;
};
