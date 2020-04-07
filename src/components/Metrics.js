import React, { Component } from 'react';

export default class Metrics extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          amount: this.props.amount,
          customers: this.props.customers,
          average:0
      };
    };

    average = () => {
        this.setState({
            average: this.state.amount / this.state.customers
        })
    }

    renderAverage = () => {
        return (
            <span>
                <strong>
                    {this.state.average}
                </strong>
            </span>
        )
    }
    
  render() {
    return (
        <div className="profil__metrics">
            <p>
                Chiffress d'affaires:  {this.state.amount}
            </p>    
            <p>
                Nombre de clients:  {this.state.customers}
            </p>
            <p>
                <button onClick={this.average}>Calculer la moyenne</button>
            </p>
            <p>
                {this.renderAverage()}
            </p>
        </div>
    );
  }
}
