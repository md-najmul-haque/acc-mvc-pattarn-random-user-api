//dependencies
const express = require('express');
const cors = require('cors')
const dbConnet = require('./utils/dbconnection');
const usersRoutes = require('./routes/userRoutes/users.routes');

//app config
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json())

//database connection
dbConnet()

//user API route
app.use('./api/v1', usersRoutes)

//base url
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "random user API server is running"
    })
})

//create server
app.listen(port, () => { console.log(`server running on port ${port}`) })