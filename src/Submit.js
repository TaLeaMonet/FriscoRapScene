import React, { Component } from 'react';
import ArtistForm from './artist-form';
import SubmitVideoForm from './submit-video-form';
import SubmitSongForm from './submit-song-form';


export default class Submit extends Component {
  render () {
    return (
        <div className="container">
          <h1>Submissions: How To Get Your Content Featured On Frisco Rap Scene</h1>
          <h2>Artist Submissions</h2>
          <p>
          To have your content featured on Frisco Rap Scene you must be based in San Francisco.
          Please enter your artist name, email address and zip code in the form below.
          </p>
          <ArtistForm />

          <h2>Song Submissions:</h2>
          <p>
          To have your songs featured on the Frisco Rap Scene website, you <b>must</b> have a Spotify account.
          Log in to your Spotify account and select the song you want featured. Copy the song link and enter it into the form below
          along with your artist name and the name of the song.
          </p>
          <SubmitSongForm />

          <h2>Video Submissions:</h2>
          <p>
          To have your music video promoted on Frisco Rap Scene your content must already be on YouTube. Click 'share' under the video
          you want featured and select 'embed'. Copy the youtube link and enter it into the form below along with your artist name and
          the name of the song.
          </p> <br/>
          <div className="card">
            <SubmitVideoForm />
          </div>
        </div>




    )
  }
}
