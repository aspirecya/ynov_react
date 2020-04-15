import React from 'react';
import Routes from './Routes';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './assets/sass/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
