import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/app-context";

export const Product = () => {
  const { id } = useParams();
  const { database } = useAppContext();
  const selectedProduct = database.find((product) => product.id == id);
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
  } = selectedProduct;
  return (
    <div className="product">
      {selectedProduct && (
        <div>
          <h2>{name}</h2>
          <img className="vertical-img" src={imageUrl} alt="" />
          <p>Price: {price}</p>
          <p>Stock: {stock}</p>
          <p>Supplier: {supplier}</p>
          <p>Department: {department}</p>
          <p>SKU: {sku}</p>
          <p>Delivered: {delivered}</p>
          <p>Description: {description}</p>
        </div>
      )}
    </div>
  );
};
