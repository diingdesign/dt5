import React from 'react';
import tshirt from './assets/images/tshirt.png';
import card from './assets/images/card.png';
import logo from './assets/images/diing_logo_white.png';
import decor from './assets/images/image_flipper_2x.png';
import './App.css';

function Header() {
  return (
    <header className="header">
      <nav className="d-flex flex-row justify-content-between align-items-center">
        <div className="title">
          <h1>DiingT Vol.5 in AR</h1>
        </div>
        <a className="diing-link link" rel="noreferrer" target="_blank" href="https://shop.diing.com">
          <div className="decor-bg d-flex flex-column justify-content-center align-items-center">
            <img id="logo" src={logo} alt="Diing" />
          </div>
          <div className="decor">
            <img src={decor} alt="Page flip to Diing.com" />
          </div>
        </a>
      </nav>
    </header>
  );
}

function Page() {
  return (
    <section>
      <article className="container">
        <header className="row instruction">
          <h2>Choose where to start your AR expereince?</h2>
          <p>e.g., in front of DiingT Vol. 5 or on the card</p>
        </header>
        <ul className="buttons row d-flex flex-row">
          <li>
            <a rel="ar" className="button-ar" id="button-ar-tshirt" href="/dt5/dt5_t.usdz#custom=https://shop.diing.com&customHeight=small">
              <img src={tshirt} alt="DiingT Vol.5 on T-Shirt" />
            </a>
          </li>
          <li>
            <a rel="ar" className="button-ar" id="button-ar-card" href="/dt5/dt5_c.usdz#custom=https://shop.diing.com&customHeight=small">
              <img src={card} alt="DiingT Vol.5 on Card" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

export default App;
