import React, { Component } from 'react';

export default class componentName extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          title: "mon titre",
          isVisible: false
      };
        
    };

    componentDidMount() {
        this.setState({
            title:"Mon titre après généraion du composant"
        })
    }

    changeTitle = () => {
        this.setState({
            title:"mon nouveau titre"
        })
    }

    displayModal = () => {
        this.setState({
            isVisible: true
        })
    }
    
  render() {
    return (
        <div className="product__card">
        <p>{this.state.title}</p>
        <button onClick={this.changeTitle}>Changer mon titre</button>
    </div>
    );
  }
}
