/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/

const passport = require('passport');
const mongoose = require('mongoose');

module.exports = () => {

    const User = mongoose.model('User');

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            _id: id
        }, '-password -salt',(err, user) => {
            done(err, user);
        });
    });

    require('./strategies/local.js')();

};
