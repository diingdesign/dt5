import React from 'react';
import tshirt from './assets/images/tshirt.png';
import card from './assets/images/card.png';
import './App.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <h1>DiingT Vol.5 in AR</h1>
      </nav>
    </header>
  );
}

function Page() {
  return (
    <section>
      <article className="container">
        <header className="row">
          <h2>Select a Mode</h2>
        </header>
        <ul className="buttons row d-flex flex-row">
          <li>
            <a rel="ar" className="button-ar" href="/dt5/dt5_t.usdz#custom=https://shop.diing.com&customHeight=small">
              <img src={tshirt} alt="DiingT Vol.5 on T-Shirt" />
            </a>
          </li>
          <li>
            <a rel="ar" className="button-ar" href="/dt5/dt5_c.usdz#custom=https://shop.diing.com&customHeight=small">
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
