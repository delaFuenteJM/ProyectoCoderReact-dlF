import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const url = `https://dummyjson.com/products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Producto encontrado:", data);
        setProduct(data);
      })
      .catch((err) => {
        console.error("Hubo un error cargando el producto:", err);
      });
  }, [id]);

  if (!product) {
    return (
      <p className="text-center mt-5">Cargando detalles del producto...</p>
    );
  }

  return (
    <div className="container mt-5">
      <h2>{product.title}</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          <p>
            <strong>Categoría:</strong> {product.category}
          </p>
          <p>
            <strong>Descripción:</strong> {product.description}
          </p>
          <p>
            <strong>Marca:</strong> {product.brand}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
