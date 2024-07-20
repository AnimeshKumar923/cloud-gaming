const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3000;

// Configure AWS SDK using environment variables
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
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
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

// Route to delete a game
app.delete('/games/:id', (req, res) => {
  const { id } = req.params;

  const params = {
    TableName: 'Games',
    Key: {
      id: id
    }
  };

  dynamoDB.delete(params, (err, data) => {
    if (err) {
      console.error('Error deleting data: ', err);
      res.status(500).send(err);
    } else {
      res.send({ message: 'Game deleted successfully!', id: id });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
