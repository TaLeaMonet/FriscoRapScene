import React, { Component } from 'react';

export default class Search extends Component {

  constructor(){
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    let search = this.props.match.params.input
    console.log(this.props);
    fetch('http://localhost:8080/search?query=' + search, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      console.log(res);
      return res.json()
    })
    .then(res => {
      console.log(res);
      this.setState({results: res})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render () {
    console.log(this.state.results)
    return (
        <div className="search-results-container">
          <h1>Search Results For...</h1>

          {
            this.state.results.map(result => {

              let embed_url = "https://open.spotify.com/embed/track/" + result.link;

                return (<div>
                  <p>{result.name}</p>
                  <iframe
                  title={result.title}
                  width='350'
                  height='350'
                  src={result.link}  allowFullScreen
                  allow="autoplay; encrypted-media">
                  </iframe>


                  <iframe
                  title={result.title}
                  src={embed_url}
                  width="300" height="80"
                  frameBorder="0" allowtransparency="true"
                  allow="encrypted-media">
                  </iframe>
                  </div>






               )

            })


          }
        </div>
    )
  }
}
