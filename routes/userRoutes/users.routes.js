const express = require('express');
const { getRandomUser, getAllUser, postUser, updateUser, deleteUser } = require('../../controllers/users.controller');

//module scaffolding
const usersRoutes = express.Router();

// routes 
usersRoutes.route('/user/random').get(getRandomUser)
usersRoutes.route('/user/all').get(getAllUser)
usersRoutes.route('/user/save').post(postUser)
usersRoutes.route('/user/update/:id').patch(updateUser)
usersRoutes.route('/user/delete/:id').delete(deleteUser)

// export route
module.exports = usersRoutes;
