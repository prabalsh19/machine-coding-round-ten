import { createContext, useContext, useEffect, useState } from "react";
import { inventoryData } from "../db";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const dbFromLocal = localStorage.getItem("db");
  const [database, setDatabase] = useState(
    JSON.parse(dbFromLocal) || inventoryData
  );
  const totalStock = database.reduce((acc, cur) => acc + Number(cur.stock), 0);
  const totalDelivered = database.reduce(
    (acc, cur) => acc + Number(cur.delivered),
    0
  );
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const lowQuantity = database.reduce(
    (acc, cur) => (cur.stock <= 10 ? acc + 1 : acc),
    0
  );
  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(database));
  }, [database]);
  const value = {
    database,
    setDatabase,
    totalStock,
    totalDelivered,
    lowQuantity,
    selectedDepartment,
    setSelectedDepartment,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
