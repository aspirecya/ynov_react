import React, { Component } from 'react';

export default class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      };
        
        fetch('https://my-json-server.typicode.com/jubs16/Products/Products')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    products: data
                })
            })
            .catch(err => console.log(err));        
    };
    
  render() {
    return (
      <div> This is a product page </div>
    );
  }
}
