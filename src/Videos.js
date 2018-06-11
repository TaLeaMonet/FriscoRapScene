import React, { Component } from 'react';

export default class Videos extends Component {
    constructor(props){
      super(props)

      this.state = {
        videos: [],
        response: ''
      }
    }
    componentDidMount () {
      console.log("did it work?");
      fetch('/videos', {
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
          this.setState({videos: res})
        })
        .catch(err => {
          console.log(err)
        })
    }
    render () {
      return (
        <div>
          <h1>Videos</h1>

          {
            this.state.videos.map(video => {

              return (<div className="box" key={video.id}>
                <iframe
                title={video.title}
                width='350'
                height='350'
                src={video.link}  allowFullScreen
                allow="autoplay; encrypted-media">

                </iframe>

                <p>{video.artist} <br/>
                {video.title}
                </p>
                </div>
                )
            })
          }
          </div>
      )
    }
  }
