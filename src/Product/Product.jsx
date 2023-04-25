import React from "react";
import { Link, useSearchParams} from "react-router-dom";
import SearchLink from "../SearchLink/SearchLink";

const Product = ({ product }) => {
  const { id, brand, colorway, imageUrl, model } = product;
  return (
    <div className="product">
      <h1>{model}</h1>
      <p>{colorway}</p>
      <img src={imageUrl} alt="" />
      <div>
        <h2>{brand}</h2>
        <Link to={id}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
