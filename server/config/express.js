/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 24-Oct-2016
*/

const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('cookie-session');
const flash = require('connect-flash');
const passport = require('passport');
const cookieParser = require('cookie-parser');

module.exports = () => {

    const app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if (process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        'extended':'true'
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.json({
        type: 'application/vnd.api+json'
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    require('../routes/user.server.route.js')(app);

    app.use(methodOverride());

    app.use(express.static('./public'));

    return app;
};
