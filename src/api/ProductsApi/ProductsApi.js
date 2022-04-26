import React, { useState, useEffect } from 'react';
import axios from 'axios'


export default function ProductsApi() {
    const [products, setProducts] = useState([])
    
    const getProducts = async () => {
        const response = await axios.get(`/api/products`)
        console.log(response)
    }

    useEffect(() =>{
        getProducts()
    },[])



  return {
      products: [products, setProducts]
  }
}
