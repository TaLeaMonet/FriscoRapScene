const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require("mysql");
const mySqlKey = require('./keys').mySql

const cors = require('cors')
const requestPromise = require( 'request-promise' )


app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));



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

app.get('/', function req (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
