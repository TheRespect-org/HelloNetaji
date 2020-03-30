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

        <p>
          NPR/ Census process has been put on hold on the wake of the Covid-19 pandemic. While that fight is still on, we are now focusing on the current needs and rights of the masses affected badly due to the current lockdown. Many civil society organisations and individuals are working to provide relief to those who need it (without agenda).
</p>
        <p>
          We can't do this alone. Reach out to your elected representatives and ask them for help in areas where families are in distress. Please note this is not the time to criticise alone, we have to work with them but also hold them accountable
</p>

        <p>
          Find your Netaji (MLA) here
  </p>


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
