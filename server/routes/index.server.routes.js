/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   13-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Nov-2016
*/

const index = require('../controllers/index.server.controller');

module.exports = (app) => {

    app.route('/').get(index.render);

};
