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
            list += `<li>Name: ${visual.artist}, Title:${visual.title} Link: ${visual.link.type}</li>`
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
          <div id='results'></div>
        {this.state.videos}
        </div>
      )
    }
  }
