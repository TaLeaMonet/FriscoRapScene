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

          let list = '<ul>';
          res.forEach(visual => {
            list += `<li>Name: ${visual.artist}, Title:${visual.title} Link: ${visual.link}</li>`
          })
          list += '</ul>';

          document.getElementById('results').innerHTML = list;
        })
        .catch(err => {
          console.log(err)
        })
    }
    render () {
      return (
        <div>
          <h1>Videos</h1>

          <object width="300" height="300"
          data="http://localhost:8080/videos">
          </object>

          <iframe id='results' width='300' height='300' src="https://youtube.com/embed/XFtUOrbXTCI">
          </iframe>
          <iframe id='results' width='300' height='300' src="https://youtube.com/embed/PeonBmeFR8o">
          </iframe>
          <iframe id='results' width='300' height='300' src="http://localhost:8080/videos">
          </iframe>

          </div>
      )
    }
  }
