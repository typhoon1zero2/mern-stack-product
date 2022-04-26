import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from '../../MainPages/utilities/productsItem/ProductItem'



export default function Products() {
  const state = useContext(GlobalState);

  const [products] = state.productsAPI.products;
  //console.log(products)
  return <div className="products">
    {
      products.map(products =>{
        return <ProductItem key={products._id} product={products} />
      })
    }
  </div>;
}
