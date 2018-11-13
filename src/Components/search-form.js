import React, {Component} from 'react'
import Search from './Search'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class SearchForm extends Component {

  constructor(){
    super();
    this.state = {
      results: []
    };
  }

  handleSubmission = (e) => {
    let search = this.props.match.params.input
    console.log(this.props);
    fetch('http://localhost:8080/search?query=' + search, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(res => {
      console.log(res);
      this.setState({results: res})
    })
    .catch(err => {
      console.log(err)
    })
    let results = {
        search: document.getElementById('query').value,

    }
    e.preventDefault();

  }

  render() {
    return (

    <div className="search-form">
    <form className="navbar-form navbar-right" onSubmit={console.log(this.handleSubmission)}>
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
