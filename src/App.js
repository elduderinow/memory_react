import React from 'react';
import Card from './Components/Card';
import Header from './Components/Header';

import './Components/Card';

import './css/style.css';
import './css/button.css';
import './css/card.css';
import './css/header.css';

function App() {
  return (
      <div className="container-fluid">
          <main className="choice computer">

              <section className="row d-flex flex-row">
                  <Header />
              </section>

              <section id="field" className="field row result">
                 <Card />
              </section>

          </main>
      </div>
  );
}

export default App;
