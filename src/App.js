import React from 'react';
import logo from './logo.svg';
import './assets/sass/style.scss';
import Title from './components/Title';
import Button from './components/Button';
import Avatar from './components/Avatar';
import Metrics from './components/Metrics';
import { Link } from 'react-router-dom';
import Routes from './Routes';

function App() {

  const name = 'vincent';
  const age = 20;

  const sayHello = (myName) => {
    return `Hello ${myName}`
  }

  const sayMyAge = (myAge) => {
    if (age >= 18) {
      return (
        <p>
          I'm {myAge} and I'm an adult
        </p>
      )
    }
    return (
        <p>
          I'm {myAge} and I'm a minor
        </p>
    )
  }

  const onSubmit = () => {
    alert("it's logged");
  }

  const addToCart = () => {
    alert("product add to cart");
  }

  return (
    <div className="App">
      <header className="header__main">
        <nav class="header__nav">
          <ul class="nav__list">
            <li class="nav__item">
              <Link to="/products">Mes produits</Link>
            </li>
            <li class="nav__item">
              <Link to="/users">Mes utilisateurs</Link>
            </li>
          </ul>
        </nav>
        <Avatar/>
        <Button text="login" class="btn btn-sm btn-black" event={onSubmit}/>
        <Button text="add to cart" class="btn btn-sm btn-white" event={addToCart} />
        <Metrics amount="2000000" customers="20"/>
      </header>
      <body>
        <Routes/>
        <Title title="Ma homepage" level="main"/>
        <div className="section__profil">
        <Title title="Mon profil"/>
          {
            sayHello(name)
          }
          {
            sayMyAge(age)
          }
          {
            age > 18 ? <p>I'm an adult</p> : <p>I'm a minor</p>
          }
        </div>
      </body>
      <footer>
        <p>Copyright My app</p>
      </footer>
    </div>
  );
}

export default App;
