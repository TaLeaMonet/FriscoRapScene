import React, { Component } from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';
import './App.css';


class App extends Component {


  render() {
    return (
    <div className="App">
      <div>
        <Navbar />
        <Footer />
      </div>
    </div>
    );
  }
}

export default App;
