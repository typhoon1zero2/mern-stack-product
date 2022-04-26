import React from "react";
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
      
    <div className="product_card">
      <img src={product.images} alt="img" />

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <div class="row-btn">
          <Link id="btn-buy" to="#!">
                Buy
          </Link>
          <Link id="btn-view" to={`/detail/${product._id}`}>
                View
          </Link>
      </div>
      <br />
    </div>

  );
}

export default ProductItem;
