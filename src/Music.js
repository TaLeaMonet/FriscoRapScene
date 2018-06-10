import React, { Component } from 'react';



export default class Music extends Component {
    constructor(props){
      super(props)

      this.state = {
        songs: [],
        response: ''
      }
    }
    componentDidMount () {
      console.log("did it work?");
      fetch('/songs', {
        method: 'GET',
        header: {
          'content-type': 'application/json'
        }
      })
        .then(res => {
          return res.json()
        })
        .then(res => {
          console.log(res);
          this.setState({songs: res})
        })
        .catch(err => {
          console.log(err)
        })
    }
    render () {
      return (
        <div className="container">
          <h1>Music</h1>

          {
            this.state.songs.map(song => {

              var embed_url = "https://open.spotify.com/embed/track/" + song.link;

              return (

                <div key={song.link}>
                    <iframe
                    title={song.title}
                    src={embed_url}
                    width="300"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"></iframe>
                </div>
                )
            })
          }
          </div>
      )
    }
  }
