import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Users from './pages/Users';
import Home from './pages/Home';
import Product from './pages/Product';

export default class componentName extends Component {
  render() {
    return (
        <div>
            <Route path="/products" component={Products}/>
            <Route path="/users" component={Users}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product/:productId" component={Product}/>
        </div>
    );
  }
}
