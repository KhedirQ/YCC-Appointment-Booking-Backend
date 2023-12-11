//Server.js
const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const appointment = require('./models/appointment');
const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;

// MongoDB connection
 mongoose.connect('mongodb://localhost/27017/appointment-booking', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

// Body parser middleware
app.use(bodyParser.json());

// Define routes for CRUD operations (create, read, update, delete)
app.get('/appointments', (req, res) => {
  res.send({ appointments: [ { id:1, date: '12/11/2023', time: '15:00' },{ id:2, date: '12/12/2023', time: '10:00' },]})
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/appointments', async (req, res) => {
  // Insert appointment data into MongoDB
  try {
    console.log(req.body)
    await appointment.create(req.body);
    res.status(200).end();
  } catch (error) {
    console.log(error)
    res.status(500);
    res.send(error);
  }
  
  
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
