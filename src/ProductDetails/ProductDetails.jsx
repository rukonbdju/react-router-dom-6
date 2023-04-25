import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
    const params=useParams()
    const {getProductById}=useProducts()
    const product=getProductById(params.id)
    const { brand, colorway, imageUrl, model } = product;
  return (
    <div>
      <h1>{model}</h1>
      <p>{colorway}</p>
      <img src={imageUrl} alt="" />
      <div>
        <h2>{brand}</h2>
          <button>Add to card</button>
      </div>
    </div>
  );
};

export default ProductDetails;