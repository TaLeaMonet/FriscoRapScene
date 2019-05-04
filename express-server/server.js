const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require("mysql");
// const mySqlKey = require('./keys').mySql
const cors = require('cors')
const requestPromise = require( 'request-promise' );
const PORT = process.env.PORT || 8080;
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:3000/user';
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;




app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("client/build"));


app.get('/spotifylogin', (req, res) => {
  console.log(SPOTIFY_CLIENT_ID);
  res.send("hello");
});

app.get('/user', (req, res) => {
  res.redirect('/music')
})

app.get('/', (req, res) => {
  res.send('')
})




const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Frisco Rap Scene"
});

app.get(' /videos', function (req, res) {
  let videos = connection.query("SELECT * FROM videos", (err, results) => {
    if(err) throw err;
    console.log(JSON.parse(JSON.stringify(results)));
    res.json(results);
  })
});


app.get('/songs', function (req, res) {
  let songs = connection.query("SELECT * FROM songs", (err, results) => {
    console.log(JSON.parse(JSON.stringify(results)));
    if(err) throw err;
    res.json(results);
  })
});

app.post('/search', function (req, res) {
  let query = req.query.query;
  console.log(req.query.query);
  console.log('hello')
  connection.query(`SELECT * FROM songs WHERE title LIKE '%${query}%'`, (err, songs) => {
    if(err) throw err;
    console.log(JSON.parse(JSON.stringify(songs)));
    let videos = connection.query(`SELECT * FROM videos WHERE title LIKE '%${query}%'`, (err, video) => {
      if(err) throw err;
      res.json(songs.concat(video));
    })
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.post('/artist-form', function (req, res) {
  console.log(req);
  let artist = req.body.artist;
  let email = req.body.email;
  let location = req.body.location;
  let artistSubmit = connection.query("INSERT INTO artists (artist, email, location) VALUES('"+req.body.artist+"', '"+req.body.email+"', '"+req.body.location+"')", (err, results) => {
    if(err) throw err;
    res.sendStatus(200);
  });

})


 app.post('/submit-video-form', function (req, res) {
   let artist = req.body.artist;
   let title = req.body.title.replace(/'+/g, "");
   let link = req.body.link;
   let song = req.body.song;
   let videoSubmit = connection.query("INSERT INTO videos (artist, title, link) VALUES('"+artist+"', '"+title+"', '"+link+"')", (err, results) => {
     if(err) throw err;
     })
   })

   app.post('/submit-song-form', function (req, res) {
     let artist = req.body.artist;
     let title = req.body.title.replace(/'+/g, "");
     let link = req.body.link;
     let song = req.body.song;
     let video = req.body.video;
     let ary = song.split('/');
     let id = ary[ary.length -1];
     let songSubmit = connection.query("INSERT INTO songs (artist, title, link) VALUES('"+artist+"', '"+title+"', '"+id+"')", (err, results) => {
        if(err) throw err;
     });
   })





app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
