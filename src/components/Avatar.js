import React, { Component } from 'react';

export default class Avatar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          url: "https://images.unsplash.com/photo-1579273166674-bea9b40ba0f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          alt: "my avatar"
      };
        
    };

    changeAvatar = () => {
        this.setState({
            url:"https://images.unsplash.com/photo-1579273175840-512f9e43f993?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            alt:"my modified avatar"
        })
    }
    
  render() {
    return (
        <div className="profil__avatar">
            <img src={this.state.url} alt={this.state.alt} />    
            <button onClick={this.changeAvatar}>Modifier profil</button>
        </div>
    );
  }
}
