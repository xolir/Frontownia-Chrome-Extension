const express = require('express');
const app = express();
const meetingsSchedule = require('./frontowniaMeetings.json');

app.get('/', function (req, res) {
  res.send(meetingsSchedule)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});