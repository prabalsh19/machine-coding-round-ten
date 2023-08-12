import { useAppContext } from "../../context/app-context";
import "../pages.css";
export const InventoryDashboard = () => {
  const { totalStock, totalDelivered, lowQuantity } = useAppContext();
  return (
    <div className="inventory">
      <div className="card ">
        <span className="green">{totalStock}</span>
        <p>Total Stocks</p>
      </div>
      <div className="card ">
        <span className="orange">{totalDelivered}</span>
        <p>Total Delivered</p>
      </div>
      <div className="card">
        <span className="red">{lowQuantity}</span>
        <p>Low Stock Items</p>
      </div>
    </div>
  );
};
