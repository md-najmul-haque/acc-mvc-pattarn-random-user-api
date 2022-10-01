const { readFileSync } = require('fs');

let loadUser = () => {
    let user = JSON.parse(readFileSync('user.json'))
    console.log(user)
    return user
}

module.exports = { loadUser };