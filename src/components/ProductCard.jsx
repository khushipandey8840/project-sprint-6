import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      style={{
        border: "1px solid gray",
        padding: "15px",
        cursor: "pointer",
      }}
    >
      <img
        src={product.thumbnail}
        width="200"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;