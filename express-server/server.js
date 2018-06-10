const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require("mysql");
const mySqlKey = require('./keys').mySql
const cors = require('cors')
const requestPromise = require( 'request-promise' );
const PORT = process.env.PORT || 3000;
const REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:3000/user';
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan('dev'));


app.use(session({secret: 'anystringoftext',
                          saveUninitialized: true,
                          resave: true}));


// app.get('/search', function(req, res){
//   console.log('search route hit successfully!')
//   let artist = req.body.artist;
//   let title = req.body.title;
//   let search = connection.query("SELECT * FROM songs WHERE title is LIKE '$title'", (err, results) =>{
//     if(err) throw err;
//     console.log(JSON.parse(JSON.stringify(results)));
//     res.json(results);
//   })
// })

app.use('/', function(req, res){
  console.log(req.cookies);
  console.log('===========================')
  console.log(req.session);
})

app.get('/spotifylogin', function(req, res) {
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

app.get('/videos', function (req, res) {
  let videos = connection.query("SELECT * FROM videos", (err, results) => {
    if(err) throw err;
    console.log(JSON.parse(JSON.stringify(results)));
    res.json(results);
  })
});


app.get('/songs', function (req, res) {
  console.log("TESTING 1")
  let songs = connection.query("SELECT * FROM songs", (err, results) => {
    console.log("TESTING 2")
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
   let artist = req.body.artist;
   let title = req.body.title.replace(/'+/g, "");
   let link = req.body.link;
   let videoSubmit = connection.query("INSERT INTO videos (artist, title, link) VALUES('"+artist+"', '"+title+"', '"+link+"')", (err, results) => {
     if(err) throw err;
   });
 })

 app.post('/submit-song-form', function (req, res) {
   let artist = req.body.artist;
   let title = req.body.title.replace(/'+/g, "");
   let link = req.body.link;
   let song = req.body.song;

   // let {artist, link, song} = req.body;

   let ary = link.split('/');
   let id = ary[ary.length -1];
   link = ary[ary.length -1];
     let songSubmit = connection.query("INSERT INTO songs (artist, title, link) VALUES('"+artist+"', '"+title+"', '"+id+"')", (err, results) => {
        if(err) throw err;
     });
   })







const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
