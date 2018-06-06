const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require("mysql");
const mySqlKey = require('./keys').mySql
const cors = require('cors')
const requestPromise = require( 'request-promise' );
const PORT = process.env.PORT || 3000;
const REDIRECT_URI = process.env.REDIRECT_URI;


app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


let redirect_uri = process.env.REDIRECT_URI || 'http://localhost:3000/login'

app.get('/login', function(req, res) {
  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + SPOTIFY_CLIENT_ID +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(REDIRECT_URI));
});

app.get('/checkcreds', (req, res) => {
  res.redirect('/')
})

app.get('/', (req, res) => {
  res.send('/music')
})



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Frisco Rap Scene"
});

app.get('/videos', function (req, res) {
  let videos = connection.query("SELECT * FROM videos", (err, results) => {
    if(err) throw err;
    console.log(JSON.parse(JSON.stringify(results)));
    res.json(results);
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/artist-form', function (req, res) {
  let artist = req.body.artist;
  let email = req.body.email;
  let location = req.body.location;
  let artistSubmit = connection.query("INSERT INTO artists (artist, email, location) VALUES('"+req.body.artist+"', '"+req.body.email+"', '"+req.body.location+"')", (err, results) => {
    if(err) throw err;
  });
})


app.post('/submit-music-form', function (req, res) {
  console.log(req.body.title);
  let artist = req.body.artist;
  let title = req.body.title.replace(/'+/g, "");
  let link = req.body.link;
  let musicSubmit = connection.query("INSERT INTO videos (artist, title, link) VALUES('"+artist+"', '"+title+"', '"+link+"')", (err, results) => {
    if(err) throw err;
  });
})


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
