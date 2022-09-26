const express = require('express');
const { getRandomUser } = require('../../controllers/users.controller');

//module scaffolding
const usersRoutes = express.Router();

// routes 
usersRoutes.route('user/random').get(getRandomUser)

// export route
module.exports = usersRoutes;
