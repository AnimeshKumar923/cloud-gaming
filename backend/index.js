const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;
require('dotenv').config();

// Configure AWS SDK
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Route to get all games
app.get('/games', (req, res) => {
  const params = {
    TableName: 'Games'
  };

  dynamoDB.scan(params, (err, data) => {
    if (err) {
      console.error('Error fetching data: ', err);
      res.status(500).send(err);
    } else {
      res.send(data.Items);
    }
  });
});

// Route to add a new game
app.post('/games', (req, res) => {
  const { title, genre, gameLink } = req.body;

  const params = {
    TableName: 'Games',
    Item: {
      id: Date.now().toString(), // Unique ID
      title,
      genre,
      gameLink
    }
  };

  dynamoDB.put(params, (err, data) => {
    if (err) {
      console.error('Error adding data: ', err);
      res.status(500).send(err);
    } else {
      res.send({ message: 'Game added successfully!', game: params.Item });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});