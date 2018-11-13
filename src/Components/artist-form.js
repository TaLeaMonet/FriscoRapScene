import React, { Component } from 'react';


export default class ArtistForm extends Component {


  handleSubmission = (e) => {

    let values = {
        artist: document.getElementById('artist').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value
    }
    e.preventDefault();

    fetch('/artist-form', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }


  render () {
    return (
        <div className="artist-form">
        <form action="/artist-form" method="post" onSubmit={e => this.handleSubmission(e)}>
        <div className="form-group">
        <b>Artist Name </b>
        <input type="text" className="form-control" name="artist" id="artist" placeholder="Enter name"></input>
        </div>
        <div className="form-group">
        <b>Email</b>
        <input type="text" className="form-control"  name="email" id="email" placeholder="Enter email"></input>
      </div>
      <div className="form-group">
        <b>Location</b>
        <input type="text" className="form-control" name="location" id="location" placeholder="Enter your zip code"></input>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
        </div>
    )
  }
}
