import { useState } from "react";
import { useAppContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "select",
    description: "",
    price: 0,
    stock: 0,
    ske: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });
  const {
    name,
    department,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = formData;
  const updateForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { setDatabase } = useAppContext();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setDatabase((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
    navigate("/products");
  };
  return (
    <div className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={submitHandler} autoComplete="off">
        <label htmlFor="">Department</label>
        <select
          value={department}
          name="department"
          onChange={(e) => updateForm(e)}
        >
          <option value="select" disabled>
            Select Department
          </option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>

        <label htmlFor="">Name</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          value={name}
          name="name"
          type="text"
        />
        <label htmlFor="">Description</label>
        <textarea
          required
          name="description"
          id=""
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => updateForm(e)}
        ></textarea>
        <label htmlFor="">Price</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          name="price"
          value={price}
          type="number"
          id=""
        />
        <label htmlFor="">Stock</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          name="stock"
          value={stock}
          type="number"
          id=""
        />
        <label htmlFor="">SKU</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          name="sku"
          value={sku}
          type="text"
        />
        <label htmlFor="">Supplier</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          name="supplier"
          value={supplier}
          type="text"
        />
        <label htmlFor="">Delivered</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          name="delivered"
          value={delivered}
          type="number"
          id=""
        />
        <label htmlFor="">Image Url</label>
        <input
          required
          onChange={(e) => updateForm(e)}
          name="imageUrl"
          value={imageUrl}
          type="text"
        />
        <br />
        <button>Add Product</button>
      </form>
    </div>
  );
};
