import React, { Component } from 'react';
import './App.scss';
import Container from '../Components/Container/container';

class App extends Component {
  render() {
    // const BoxNumber = 6;
    return (
      <div>
        <div data-testid="app" className="App">
          Hello World
        </div>

        <Container />
      </div>
    );
  }
}

export default App;
