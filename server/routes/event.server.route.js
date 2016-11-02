/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   28-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 28-Oct-2016
*/

const events = require('../controllers/event.server.controller');

module.exports = (app) => {

    app.route('/api/guest')
        .post(guests.create);

    app.route('/api/guest/:hostId')
        .get(guests.list)
        .post(guests.update);

};
