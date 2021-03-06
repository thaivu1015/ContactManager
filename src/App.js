import React, { Component } from 'react';

import Contacts from './components/Contacts';
import Header from './components/Header';

import { Provider } from './context';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header text="Super Heroes Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
