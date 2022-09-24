const express = require('express');
const cors = require('cors')
const app = express();
const dbConnet = require('./utils/dbconnection');

const port = process.env.PORT || 5000;


// middleware
app.use(cors());

dbConnet()

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => { console.log(`server running on port ${port}`) })