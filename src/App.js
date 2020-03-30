import React from 'react';
import logo from './logo.svg';
import './App.css';
import Netas from './Netas';
import Petition from './Petition';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.instagram.com/hellonetaji/"><i className="fab fa-instagram"></i> HelloNetaji </a>
        <a href="https://facebook.com/HelloNetaji-102682481335358/"><i className="fab fa-facebook"></i> HelloNetaji </a>
        <a href="https://twitter.com/netajihello"><i className="fab fa-twitter"></i> NetajiHello </a>
        <label className="float-right" >v1.0.2</label>
      </div>
      <div className="jumbotron text-center">
        <img style={{"width" : "10%"}} src="logos/logo.jpeg" />
        
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>

          <div className="col-sm-10">

            <Netas />

            <hr style={{ margin: '3em' }} />

          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
