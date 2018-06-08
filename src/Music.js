import React, { Component } from 'react';



// export default class Music extends Component {
//   render () {
    // var str = "https://open.spotify.com/track/4HiuT2pdJzwdSKf72aSdhs";
    // // console.log(str.split('/'));
//     var ary = str.split('/');
//     var embed_url = "https://open.spotify.com/embed/track/" + ary[ary.length -1];
// //
//     return (
        // <div>
        //     <h1>Music</h1>
        //     <iframe src={embed_url} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        // </div>
//     )
//   }

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

                <div>
                    <iframe src={embed_url} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                )
            })
          }
          </div>
      )
    }
  }
