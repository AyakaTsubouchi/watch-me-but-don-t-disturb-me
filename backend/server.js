const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');

const app = express();
//connect to local host
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

//pass the index.html that is client side file to the server.
app.use(express.static('public'));

// GET method route
app.get('/', function(req, res) {
  res.send('GET request to the homepage');
});
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

//GET method route
app.get('/api', (request, response) => {
  // Find all documents in the collection
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

// POST method route
app.post('/api', (request, response) => {
  console.log('I got request');
  console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  data.doing = '';
  data.did = '';
  database.insert(data);
  response.json({
    status: 'success',
    timestamp: data.timestamp,
    doing: data.doing,
    did: (data.did = '')
  });
});
