import React from 'react';
import ProductItem from './ProductItem';

const ProductsGrid = (props) => {
  const addTocart = (args) => {
      //console.log(product);
     // localstorage.setItem('card',data);
  }
  return (
    <div className="products__grid">
      {props.products.map((product, index) => (
        <div className="product__item--wrapper" key={index}>
          <ProductItem product={product} />
          {/* doit être un composant */}
          {/* <button onClick={(args)=>addTocart(args)}>Add to cart</button> */}
         
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
