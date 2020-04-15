import React from 'react';
import ProductItem from './ProductItem';

const ProductsGrid = (props) => {

  
  const addTocart = (product) => {
    let currentCard = localStorage.getItem('card');
    console.log(JSON.parse(currentCard), 'Panier actuel');  
    if (currentCard !== null) {
      let cardArray = [];
      console.log(JSON.parse(currentCard));
      cardArray.push(currentCard, JSON.stringify(product));
      localStorage.setItem('card', cardArray);
      console.log(JSON.parse(cardArray));
    }
    else {
      localStorage.setItem('card', JSON.stringify(product));
    }
    //Pour récupérer le localstorage -> getItem('card)
    // Si le LS n'est pas null alors 
    //   -> alors stocker l'ancien LS dans un tableau vide
    //   -> Pusher le product dans le tableau
    //   -> Le nouveau tableau set dans le LS 
    // Sinon si le LS est null 
    //     -> setItem du product
    // WARNING !! Stringify ce qu'on va passer dans le LS ([Object])
          // -> Donc pour le récupéer en JS -> JSON.parse()
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
