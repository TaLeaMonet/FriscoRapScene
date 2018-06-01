import React, { Component } from 'react';

export default class Submit extends Component {
  render () {
    return (
        <div>
          <h1>Submissions: How To Get Your Content Featured On Frisco Rap Scene</h1>
          <h2>Song Submissions:</h2>
          <p>
          In order to get your songs featured on the Frisco Rap Scene website, you <b>must</b> have a Spotify account.
          Log in to your Spotify account and select the song you want featured. Copy the song link and enter it into the form below
          along with your artist name, email and location.
          </p>

          <h2>Video Submissions:</h2>
          <p>
          To have your music video promoted on Frisco Rap Scene your content must already be on YouTube. Click 'share' under the video
          you want featured and select 'embed'. Copy the youtube link and enter it into the form below along with your artist name and
          the name of the song.
          </p> <br/>
          <form>
<div className="container">

  <div className="form-group">
 <b>Artist Name </b>
    <input type="name" className="form-control" id="name" placeholder="Enter name"></input>
  </div>
  <div className="form-group">
  <b>Email</b>
    <input type="email" className="form-control" id="email" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <b>Location</b>
    <input type="location" className="form-control" id="location" placeholder=" Enter Location"></input>
  </div>
  <div className="form-group">
    <b>Song Link</b>
    <input type="song" className="form-control" id="song-link" placeholder="Enter song link"></input>
  </div>
  <div className="form-group">
    <b>Video Link</b>
    <input type="video" className="form-control" id="location" placeholder="Enter video link"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
</div>
    )
  }
}
