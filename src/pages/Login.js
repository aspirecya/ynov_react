import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  login = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="page__login">
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.login();
            }}
          >
            <div className="form-group">
              <label htmlFor="">Votre email</label>
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Votre Mot de passe</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <input
              className="btn btn-black"
              type="submit"
              value="Je me connecte"
            />
          </form>
        </div>
      </div>
    );
  }
}
