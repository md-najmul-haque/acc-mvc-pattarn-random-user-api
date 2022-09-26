const { loadUser } = require("../model/userModel");
const usersRoutes = require("../routes/userRoutes/users.routes");

//controller 
const controller = {};

//get random user
controller.getRandomUser = (req, res, next) => {
    const users = loadUser();
    if (Array.isArray(users) && users.length > 0) {
        const randomUser = users[Math.floor(Math.random() * users.length)]
        res.status(200).json({
            success: true,
            message: 'random user',
            randomUser
        })
    } else {
        res.status(500).json({
            success: false,
            message: 'No user found',
        })
    }
}

//get all user
controller.getAllUser = (req, res, next) => {
    const { limit } = req.query
    const users = loadUser();
    console.log(users)
    if (Array.isArray(users) && users.length > 0) {
        if (limit) {
            const limitedUser = users.slice(0, limit);
            res.status(200).json({
                success: true,
                message: 'Limited User',
                limitedUser
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'All User',
                users
            })

        }
    } else {
        res.status(500).json({
            success: false,
            message: 'No user found',
        })
    }

}

//save a user
controller.postUser = (req, res, next) => {
    if (typeof req.body === 'object' && Array.isArray(req.body) === false) {
        const { gender, name, contact, address, photoURL } = req.body
    } else {
        return res.status(400).json({
            success: false,
            message: 'invalid body request'
        })
    }
}




//export controller 
module.exports = controller;