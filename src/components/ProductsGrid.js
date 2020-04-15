import React from 'react';
import ProductItem from './ProductItem';

const ProductsGrid = (props) => {

  
  const addTocart = (product) => {
    let card = JSON.parse(localStorage.getItem('card')) || [];
    card.push(product);
    localStorage.setItem('card', JSON.stringify(card));
    console.log(JSON.parse(localStorage.getItem('card')));
  }
  
  return (
    <div className="products__grid">
      {props.products.map((product, index) => (
        <div className="product__item--wrapper" key={index}>
          <ProductItem product={product} />
          {/* doit être un composant */}
          <button className="btn btn-black" onClick={()=>addTocart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
