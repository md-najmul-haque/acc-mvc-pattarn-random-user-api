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

        const userGender =
            typeof gender === 'string' &&
                gender.trim().length > 0 &&
                (gender.toLocaleLowerCase() === 'male' ||
                    gender.toLocaleLowerCase() === 'female' ||
                    gender.toLocaleLowerCase('others')) ? gender : false

        const userName = typeof name === 'string' && name.trim().length > 0 ? name : false
        const userContact = typeof contact === 'number' && contact.trim().length === 11 ? contact : false
        const userAddress = typeof address === 'string' && address.trim().length > 0 ? address : false
        const userPhotoURL = typeof photoURL === 'string' && address.trim().length > 0 ? photoURL : false

        if (userGender && userName && userContact && userAddress && userPhotoURL) {



        } else {
            return res.status(400).json({
                success: false,
                message: "User is not created. Missing required fields",
            })
        }

    } else {
        return res.status(400).json({
            success: false,
            message: 'invalid body request'
        })
    }
}




//export controller 
module.exports = controller;