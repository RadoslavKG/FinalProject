/**
 * Created by 1 on 15.12.2016 г..
 */
const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    database.once('open', (error)=> {
        if(error) {
            console.log(error);
            return;
        }
        console.log('MongoDB ready!')
    });
    require('./../models/User');
};