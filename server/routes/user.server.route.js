/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/

const users = require('../controllers/user.server.controller');
const passport = require('passport');

module.exports = (app) => {

    app.route('/authenticate')
        .post(users.login);

    app.route('/users')
        .post(users.create);

    app.route('/api/users')
        .get(users.list);

};
