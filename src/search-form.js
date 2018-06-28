import React, {Component} from 'react'
import Search from './Search'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class SearchForm extends Component {
  render() {
    return (
    <div className="search-form">
    <form className="navbar-form navbar-right">
      <div className="form-group">
        <input type="text" name="query" id="query"
        className="form-control"
        placeholder="enter artist or song title" />
      </div>
      <Link to="/search" type="submit" className="btn btn-default">Submit</Link>
    </form>
    </div>
    );
  }
}
