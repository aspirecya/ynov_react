import React, { Component } from 'react';
import Title from '../components/Title';
import ProductsGrid from '../components/ProductsGrid';

export default class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      };
        
  };
  
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/jubs16/Products/Products')
    .then(res => res.json())
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
