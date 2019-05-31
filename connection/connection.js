const moongoose = require('mongoose');

moongoose.connect('mongodb://127.0.0.1:27017/android4assignment-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})