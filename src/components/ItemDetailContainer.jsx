import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {

      getProduct(id).then(res => setProduct(res))
  }, [id])

  return (
    <ItemDetail item={product} />
  )
}

export default ItemDetailContainer
