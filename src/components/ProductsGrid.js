import React from 'react';

const ProductsGrid = (props) => {
    return (
    <div className="products__grid">
        {
          props.products.map((product, index) => (
            <div className="product__item">
              <div className="product__thumb" style={{backgroundImage:`url(${product.imgUrl})`}}>
              </div>
              <h2>
                {product.name}
              </h2>
              <p>
                {product.price}
              </p>
            </div>
          ))
        }
    </div>
    );
}

export default ProductsGrid;
