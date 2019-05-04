import React, { Component } from 'react';


export default class SubmitSongForm extends Component {


  // handleSubmission = (e) => {
  //
  //   let songSubmit = {
  //       artistName: document.getElementById('artist-name').value,
  //       songTitle: document.getElementById('song-title').value,
  //       songLink: document.getElementById('song-link').value
  //   }
  //   e.preventDefault();
  //
  //   fetch('/submit-song-form', {
  //     method: 'POST',
  //     body: JSON.stringify(songSubmit),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }

  render () {
    return (
        <div className="submit-song-form">
        <form action="/submit-song-form" method="post">
        <div className="form-group">
          <b>Artist Name</b>
          <input type="text" name="artist" className="form-control" id="artist-name" placeholder="Enter artist name"></input>
        </div>
        <div className="form-group">
          <b>Song Title</b>
          <input type="text" name="title" className="form-control" id="song-title" placeholder="Enter song title"></input>
        </div>
        <div className="form-group">
        <b>Song Link</b>
        <input type="text" name="song" className="form-control" id="song-link" placeholder="Enter song link"></input>
        <b>Video Link</b>
        <input type="text" name="link" className="form-control" id="location" placeholder="Enter video link"></input>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
        </div>
    )
  }
}
