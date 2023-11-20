const mongoose = require('mongoose')

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev')
            .then(() => console.log('Connected!'));
    } catch (error) {
        console.log('Connect failed');
    }

}

module.exports = { connect }
