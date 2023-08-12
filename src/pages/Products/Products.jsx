import { useState } from "react";
import { useAppContext } from "../../context/app-context";
import { Link } from "react-router-dom";

export const Products = () => {
  const { database, selectedDepartment, setSelectedDepartment } =
    useAppContext();

  const [showLowStock, setShowLowStock] = useState(false);
  const [selectedSort, setSelectedSort] = useState("name");
  const filterByDepartment = (arr) => {
    if (selectedDepartment === "all") {
      return arr;
    }
    return arr.filter((item) => item.department === selectedDepartment);
  };
  const filterLowStock = (arr) => {
    if (showLowStock) {
      return arr.filter((item) => item.stock <= 10);
    } else {
      return arr;
    }
  };
  const sortData = (arr) => {
    if (selectedSort === "name") {
      return arr.sort((a, b) => {
        if (a.name.toLowerCase() === b.name.toLowerCase()) {
          return 0;
        }
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
      });
    }
    return arr.sort((a, b) => a[selectedSort] - b[selectedSort]);
  };
  const filtersFunctions = [filterByDepartment, filterLowStock, sortData];
  const filteredData = filtersFunctions.reduce(
    (acc, cur) => cur(acc),
    database
  );

  return (
    <div className="products">
      <div className="products-nav">
        <h4>Products</h4>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="all">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <div>
          <input
            id="lti"
            type="checkbox"
            onChange={() => setShowLowStock((prev) => !prev)}
            checked={showLowStock}
          />
          <label htmlFor="lti">Low Stock Item</label>
        </div>
        <div>
          <select onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>
        <Link to={"/add"}>
          <button>New</button>
        </Link>
      </div>

      {/* table */}
      <table>
        <tr className="heading">
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
        {filteredData.map(
          ({ id, name, imageUrl, description, price, stock, supplier }) => (
            <tr key={id}>
              <td>
                <img src={imageUrl} alt="" />
              </td>
              <td>
                <Link to={`/product/${id}`}>{name}</Link>
              </td>
              <td>{description}</td>
              <td>{price}</td>
              <td>{stock}</td>
              <td>{supplier}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
};
