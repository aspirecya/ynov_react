import React from 'react';

const ProductItem = (props) => {
  return (
    <div className="product__item">
      <div
        className="product__thumb"
        style={{backgroundImage: `url(${props.product.imgUrl})`}}
      ></div>
      <h2>{props.product.name}</h2>
      <p>{props.product.price}</p>
    </div>
  );
};

export default ProductItem;
