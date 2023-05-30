const express = require('express')
const fs = require('fs/promises');
const cors = require('cors');
const _ = require('lodash');
const {v4: uuid} = require('uuid');

const app = express()
const port = 3001

app.use(express.json());
app.use(cors());

const locationsList = [
  
]

//Get locations list
app.get('/locations', (req, res) => {
  
  res.json(locationsList)
})

//Create new location
app.post('/location', (req, res) => {
  const newUid = uuid();
  const location = {...req.body, id: newUid};
  locationsList.push(location);
  res.status(200).json(locationsList)
})

app.delete('/location/:id', (req, res) => {
  
  const locationId = req.params.id;
  const indexToDelete = locationsList.findIndex( item => item.id === locationId);
  locationsList.splice(indexToDelete, 1);

  res.status(200).json(locationsList);
})

app.put('/location/:id', (req, res) => {
  
  const locationId = req.params.id;
  const location = req.body;
  const index = locationsList.findIndex( item => item.id === locationId);

  locationsList[index] = {...location};

  res.status(200).json(locationsList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})