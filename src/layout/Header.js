import React from 'react';
import logo from '../assets/img/logo-nike.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header__main">
            <div className="header__logo">
                <img src={logo} alt="Logo nikie"/>
            </div>
            <nav className="header__nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/products">Mes produits</Link>
                </li>
                <li className="nav__item">
                    <Link to="/users">Mes utilisateurs</Link>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;
