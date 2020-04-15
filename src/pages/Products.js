import React, { Component } from 'react';
import Title from '../components/Title';
import ProductsGrid from '../components/ProductsGrid';
import ApiProduct from '../api/api.products';

export default class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      };
        
  };
  
  componentDidMount() {
    ApiProduct.getProducts()
    .then((data) => {
        console.log(data);
        this.setState({
            products: data
        })
    })
    .catch(err => console.log(err));   
  }
    
  render() {
    return (
      <div className="product__grid--wrapper">
        <Title title="E shop"/>
        <ProductsGrid products={this.state.products}/>
      </div>
    );
  }
}
