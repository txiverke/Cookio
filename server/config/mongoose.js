/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/

const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {

    const db = mongoose.connect(config.db);

    require('../models/user.server.model');

    return db;
};
