/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 25-Oct-2016
*/

const users = require('../controllers/user.server.controller');
const passport = require('passport');

module.exports = (app) => {

    app.route('/signup').post(users.signup);
    app.route('/signin').post(users.signin);

    app.route('/api/users/:userId')
        .post(users.update);

    app.route('/api/users')
        .get(users.list);

    app.param('userId', users.userByID);

};
