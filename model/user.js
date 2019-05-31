const moongose = require('mongoose');

const User = moongose.model('User', {

    userId: {
        type: String
    },
    userFname: {
        type: String
    },
    userLname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }


})
module.exports = User;