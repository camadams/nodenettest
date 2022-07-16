const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1234;

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('./public/'));

app.get('/hi', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
