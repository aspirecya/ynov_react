import React, {useState, useEffect} from 'react';
import ApiProduct from '../api/api.products';

const Product = (props) => {
  //Récupérer la liste de mes produits à partir de l'APi (consommer mon service getProduct)
  //L'élements de mon tableau à l'index correspondant au paramètre de l'url (ex: product[2])
  // Afficher le produit dans le render
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ApiProduct.getProducts()
      .then((data) => {
        setProducts({
          data,
        });
        console.log(products);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props, products]);

  return (
    <div className="product__card">
      {!isLoading ? (
        <div className="product__item">
          <img src={products.data[props.match.params.productId].imgUrl} alt="" />
          <h1>{products.data[props.match.params.productId].name}</h1>
          <p>{products.data[props.match.params.productId].price}</p>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Product;
