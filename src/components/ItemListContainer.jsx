import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../firebase/db";

function ItemListContainer() {
  const { slug } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (slug) {
      getProductsByCategory(slug)
      .then(res => setProductos(res))
    } else {
      getProducts().then(res => setProductos(res))
    } 
  }, [slug]);

  return (
    <div className="container mt-3">
      <h2>{slug ? `Categoría: ${slug}` : "Todos los productos"}</h2>
      <ItemList items={productos} />
    </div>
  );
}

export default ItemListContainer;
