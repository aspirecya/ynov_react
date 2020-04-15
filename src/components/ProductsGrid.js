import React from 'react';
import ProductItem from './ProductItem';

const ProductsGrid = (props) => {
  return (
    <div className="products__grid">
      {props.products.map((product, index) => (
        <div className="product__item--wrapper" key={index}>
          <ProductItem product={product}/>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
