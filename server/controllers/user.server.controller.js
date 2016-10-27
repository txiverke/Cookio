/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   19-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 25-Oct-2016
*/

const User = require('mongoose').model('User');
const passport = require('passport');
const uuid = require('node-uuid');
const multiparty = require('multiparty');
const fs = require('fs');

exports.signup = (req, res) => {

  if (!req.user) {
      console.log(req.body);
      const user = new User(req.body);
      user.provider = 'local';
      user.avatar = 'default_avatar.png';

      user.save((err) => {
          if (err) {
              res.status(404).json({
                  message: 'Something was wrong!',
                  success: false
              });
          } else {
              req.login(user, (err) => {
                  if (err) {
                      res.status(404).json({
                          message: 'Something was wrong!',
                          success: false
                      });
                  } else {
                      res.status(200).json({
                          user: user,
                          success: true
                      });
                  }
              });
          }
      });

    } else {
      res.status(404).json({message: 'Something was wrong!'});
  }

};

exports.signin = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username: username},
        (err, user) => {
            if (err || !user || !user.authenticate(password) ) {
                res.status(404).json({
                    message: err,
                    success: false
                });
            } else {
                res.status(200).json({
                    user: user,
                    success: true
                });
            }
    });

};

exports.update = (req, res) => {

    User.findByIdAndUpdate(req.user.id, req.body, (err, user) => {
        if (err) {
            res.status(404).json({message: 'Something was wrong!'});
        } else {
            res.status(200).json({user: user});
        }
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

exports.userByID = (req, res, next, id) => {

    User.findOne({ _id: id }, (err, user) => {
        if (err) res.status(404).json({message: 'Something was wrong!'});
        req.user = user;
        next();
    });

};
