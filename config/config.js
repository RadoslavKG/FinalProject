/**
 * Created by 1 on 15.12.2016 г..
 */
const path = require('path');

module.exports = {
    development: {
        rootFolder: path.normalize(path.join(__dirname, '/../')),
        connectionString: 'mongodb://localhost:27017/blog'
    },
    production:{}
};