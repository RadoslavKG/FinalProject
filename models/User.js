/**
 * Created by 1 on 15.12.2016 г..
 */
const mongoose = require('mongoose');

let userSchema = mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        passwordHash: {type:String, required: true},
        fullName: {type:String, required: true},
        salt: {type: String, required: true}
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

userSchema.method ({
    authenticate: function (password) {
        let inputPasswordHash = encryption.hashPassword(password, this.salt);
        let isSamePasswordHash = inputPasswordHash === this.passwordHash;
        return isSamePasswordHash;
    }
});
const User = mongoose.model('User', userSchema);
