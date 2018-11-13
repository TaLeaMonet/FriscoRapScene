import React, { Component } from 'react';
import Navbar from './Components/Commons/navbar.js';
import Footer from './Components/Commons/footer.js';
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
