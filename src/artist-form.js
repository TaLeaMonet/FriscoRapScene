import React, { Component } from 'react';


export default class ArtistForm extends Component {
  render () {
    return (
        <div>
        <form action="/artist-form" method="post">
        <div className="form-group">
        <b>Artist Name </b>
        <input type="text" className="form-control" name="artist" id="name" placeholder="Enter name"></input>
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
