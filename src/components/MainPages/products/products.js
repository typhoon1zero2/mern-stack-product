import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from '../../MainPages/utilities/productsItem/ProductItem'
import Loading from '../utilities/loading/loading';



export default function Products() {
  const state = useContext(GlobalState);

  const [products] = state.productsAPI.products;
  //console.log(products)

  
  return (
    <>

      <div className="products">
        {
          products.map(product =>{
            return <ProductItem key={product._id} product={product} />
          })
        }
      </div>
      {products.length === 0 && <Loading />}
    </>
  )
}
