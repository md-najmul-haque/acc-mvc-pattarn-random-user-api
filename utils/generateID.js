const generateID = (idLength) => {
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    idLength = typeof idLength === 'number' && idLength > 0 ? idLength : false;
    if (idLength) {
        let id = '';
        for (let i = 0; i < idLength; i++) {
            id += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
        }
        return id
    }
}

module.exports = generateID;