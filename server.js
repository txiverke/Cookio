/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/



process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const mongoose = require('./server/config/mongoose');
const express = require('./server/config/express');
var pass = require('./server/config/passport');
const db = mongoose();
const app = express();
const passport = pass();
const port = process.env.PORT || 3001;

module.exports = app;

app.listen(port, () => {
    console.log(`${process.pid} listening on ${port}`);
});
