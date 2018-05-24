const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mysql = require("mysql");
const mySqlKey = require('./keys').mySql

app.use(express.static(path.join(__dirname, 'build')));



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Frisco Rap Scene"
});

connection.connect(err => {
  if (err) throw err;
  connection.query("INSERT INTO videos (title, length) VALUES ('lemonade', 4)", (err, results) => {
    if(err) throw err;
  })
})

app.get('/videos', function (req, res) {
  res.send({id: 1, email: "taleacarpenter@gmail.com"});
});

app.get('/', function req (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
