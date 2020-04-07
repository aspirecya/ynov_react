import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Users from './pages/Users';

export default class componentName extends Component {
  render() {
    return (
        <div>
            <Route path="/products" component={Products}/>
            <Route path="/users" component={Users}/>
            {/* <Route path="/" component={Home}/> */}
            {/* <Route path="/products/:id" component={ProductDetails} */}
        </div>
    );
  }
}
