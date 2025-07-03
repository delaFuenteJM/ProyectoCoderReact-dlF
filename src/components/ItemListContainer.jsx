import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { slug } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const url = slug
      ? `https://dummyjson.com/products/category/${slug}`
      : "https://dummyjson.com/products";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
      })
      .then((data) => {
        console.log("Productos:", data.products);
        setProductos(data.products);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setProductos([]);
      });
  }, [slug]);

  return (
    <div className="container mt-3">
      <h2>{slug ? `Categoría: ${slug}` : "Todos los productos"}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
