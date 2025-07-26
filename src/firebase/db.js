import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDoc,
  addDoc
} from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const product = [];

  querySnapshot.forEach((doc) => {
    product.push({ ...doc.data(), id: doc.id });
  });

  return product;
}

export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
    })

    return products
}

export const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {...docSnap.data(), id: docSnap.id}
    } else {
      console.log("No such document!");
    }

}

export const createOrden = async(orden) => {
  const docRef = await addDoc(collection(db, "ordenes"),
  orden)
  console.log("Document written with ID: ", docRef.id)
  
}