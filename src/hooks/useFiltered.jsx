import { useState } from "react";
import { useMenuContext } from "../store/context/MenuProvider";

export const useFiltered = () => {
  const { allItems } = useMenuContext();
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
    if (value.trim() === "") {
      setFilteredItems([]);
    } else {
      const lower = value.toLowerCase();
      setFilteredItems(
        allItems.filter(
          (item) => item.name.toLowerCase().includes(lower) || item.description.toLowerCase().includes(lower)
        )
      );
    }
  };
  return { handleSearch, search, filteredItems, setSearch };
};
