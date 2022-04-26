import React, { useContext } from "react";
import { Link } from "react-router-dom";


export default function BtnRender({ product }) {
  return (
    <div class="row-btn">
    <Link id="btn-buy" to="#!">
          Buy
    </Link>
    <Link id="btn-view" to={`/detail/${product._id}`}>
          View
    </Link>
</div>
  );
}
