import React from 'react';
import logo from './logo.svg';
import './App.css';
import Netas from './Netas';
import Petition from './Petition';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.instagram.com/hellonetaji/"><i className="fab fa-instagram"></i> hellonetaji </a>
        <a href="https://facebook.com/HelloNetaji-102682481335358/"><i className="fab fa-facebook"></i> HelloNetaji </a>
        <a href="https://twitter.com/hello_netaji"><i className="fab fa-twitter"></i> hello_netaji </a>
        <label className="float-right" >v1.0.2</label>
      </div>
      <div className="jumbotron text-center">
        <h1>Hello Netaji!</h1>
        <p><a href="https://en.wikipedia.org/wiki/National_Register_of_Citizens"> NPR</a> 2020 se NRC banega <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fhellonetaji.therespect.org%2F&text=Dear%20Netaji!%20Please%20stop%20NPR%20in%20Maharashtra%20Assembly.%20NPR%20is%20the%20first%20step%20of%20NRC%20which%20will%20mark%20people%20as%20doubtful%20citizens!%20%23HelloNetaji%20%23noNPR%20%23noNRC%20Find%20your%20Neta%20at%20">#NoNPR</a></p>

        <Petition />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>

          <div className="col-sm-10">
            <p>
              Our MLAs are law makers. We elect them to represent us and issues that concern us. The beauty of a federal democratic state is that you can and you must be connected to your elected representative.
                        </p>


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
