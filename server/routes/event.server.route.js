/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   28-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 09-Nov-2016
*/

const events = require('../controllers/event.server.controller');
const users = require('../controllers/user.server.controller');

module.exports = (app) => {

    app.route('/api/events')
        .post(events.create);

    app.route('/api/events/:eventId')
        .get(events.look)
        .post(events.update);

    app.route('/api/events/list/:hostId')
        .get(events.list);

    app.param('eventId', events.eventByID);

};
