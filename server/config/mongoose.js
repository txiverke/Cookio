/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 02-Nov-2016
*/

const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {

    mongoose.Promise = global.Promise;
    const db = mongoose.connect(config.db);

    require('../models/user.server.model');
    require('../models/event.server.model');

    return db;
};
