import React, { Component } from 'react';
import Home from './Homepage';
import Music from './Music';
import Videos from './Videos';
import Submit from './Submit';
import Search from './Search';
import SearchForm from './search-form';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
  <Router>
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
      <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <Link className="navbar-brand" to="/">Frisco Rap Scene</Link>
    </div>
  </div>
  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
      <li><Link to="/music">Music</Link></li>
      <li><Link to="/videos">Videos</Link></li>
      <li><Link to="/submit">Submit</Link></li>
    </ul>

  <SearchForm />

      </div>

    </nav>
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/music" component={Music}/>
        <Route exact path="/videos" component={Videos}/>
        <Route exact path="/submit" component={Submit}/>
        <Route path="/search/:input" component={Search}/>
        </div>
      </div>
   </Router>
    );
  }
}
