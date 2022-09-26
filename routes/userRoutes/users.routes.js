const express = require('express')

//module scaffolding
const usersRoutes = express.Router();

// routes 
usersRoutes.route('user/random').get(getRandomUser)

// export route
module.exports = usersRoutes;
