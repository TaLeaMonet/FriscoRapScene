import React, { Component } from 'react';

export default class Videos extends Component {
  componentDidMount () {
    fetch ('/videos')
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render () {
    return (
        <div>
          <h1>Videos</h1>

        </div>
    )
  }
}
