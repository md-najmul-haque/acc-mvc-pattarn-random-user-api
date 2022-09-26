const { loadUser } = require("../model/userModel");
const usersRoutes = require("../routes/userRoutes/users.routes");

//controller 
const controller = {};

controller.getRandomUser = (req, res, next) => {
    const users = loadUser();
    const result = users[Math.floor(Math.random() * users.length)]
    res.status(200).send(result)
}



//export controller 

module.exports = controller;