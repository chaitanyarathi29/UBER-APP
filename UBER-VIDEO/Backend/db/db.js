const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); 

console.log('DB_CONNECT:', process.env.DB_CONNECT);

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}

module.exports = connectToDb;