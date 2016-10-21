/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

module.exports = () => {
    passport.use(new LocalStrategy((username, password, done) => {
        User.findOne({username: username},
            (err, user) => {
                if (err) return done(err);

                if (!user) {
                    return done(null, false, {message: 'Unknown user'});
                }

                if (!user.authenticate(password)) {
                    return done(null, false, {message: 'Invalid password'});
                }

                return done(null, user);
        });
    }));
};
