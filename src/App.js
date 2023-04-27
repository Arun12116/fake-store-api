import { useState, useEffect } from "react"

import Product from "./Components/Product";


function App() {
  const [product,setProduct] = useState([]);
  // console.log(product);
  useEffect(_ => {

    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((data) => {
        setProduct(data)
      })

    })

  }, [])

  return (
    <>
      <Product  product={product}/>
    </>
  );
}

export default App;
