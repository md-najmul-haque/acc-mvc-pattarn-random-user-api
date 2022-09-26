const express = require('express');
const { getRandomUser, getAllUser } = require('../../controllers/users.controller');

//module scaffolding
const usersRoutes = express.Router();

// routes 
usersRoutes.route('/user/random').get(getRandomUser)
usersRoutes.route('/user/all').get(getAllUser)

// export route
module.exports = usersRoutes;
