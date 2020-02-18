import React from 'react';
import logo from './logo.svg';
import './App.css';
import Netas from './Netas';

function App() {
  return (
    <div className="App">
      <div class="jumbotron text-center">
        <h1>Hello Netaji! NPR hi NRC hai!</h1>
      </div>

      <div class="container">
        <div className="row">
          <div className="col-sm-1"></div>

          <div className="col-sm-10">
            <h2>
              Search for your Neta!
                        </h2>
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
