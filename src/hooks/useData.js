import { useEffect, useState } from "react";


const useData = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('https://sheltered-gorge-39495.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    } ,[])

    return [products, setProducts];
}

export default useData;