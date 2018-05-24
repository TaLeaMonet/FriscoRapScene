import React, { Component } from 'react';
import Navbar from './navbar.js';
import Footer from './footer.js';


class App extends Component {


  render() {
    return (
    <div className="App">
      <div>
        <Navbar />
      </div>
        <Footer />
    </div>
    );
  }
}

export default App;
