import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="wrapper fixed-bottom">
          <a href="https://www.github.com/TaLeaMonet/FriscoRapScene" target="_blank"><i className="fab fa-github-square fa-2x fa-fw"></i></a>
          <a href="https://www.instagram.com/friscorapscene" target="_blank"><i className="fab fa-instagram fa-2x fa-fw"></i></a>
          <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter-square fa-2x fa-fw"></i></a>
          <a href="https:www.soundcloud.com/friscorapscene" target="_blank"><i className="fab fa-soundcloud fa-2x fa-fw"></i></a>
          <a href="https:www.youtube.com" target="_blank"><i className="fab fa-youtube-square fa-2x fa-fw"></i></a>
        </div>
        </footer>
    );
  }
}
