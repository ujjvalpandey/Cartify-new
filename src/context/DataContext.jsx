import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetch products 
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=100`
      );
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  
  const getUniqueData = (data, property) => {
    let newVal = data
      ?.map((item) => item[property])
      .filter(Boolean);

    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueData(data, "category");
  const brandOnlyData = getUniqueData(data, "brand");

  return (
    <DataContext.Provider
      value={{
        data,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);