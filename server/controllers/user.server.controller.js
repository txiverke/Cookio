/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   19-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 20-Oct-2016
*/

const User = require('mongoose').model('User');
const passport = require('passport');
const uuid = require('node-uuid');
const multiparty = require('multiparty');
const fs = require('fs');

exports.login = (req, res) => {

    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username},
        (err, user) => {
            if (err || !user || !user.authenticate(password) ) {
                res.status(404).json({message: 'Something was wrong!'});
            } else {
                res.status(200).json({user: user});
            }
    });

};

exports.create = (req, res, next) => {

    const user = new User(req.body);

    user.save((err) => {
        if (err) return next(err);

        res.status(200).json(user);
    });

};

exports.list = (req, res, next) => {

    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });

};

exports.read = (req, res) => {
    res.json(req.user);
};

const getErrorMessage = (err) => {

    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }
    console.log(message)
    return message;
};
