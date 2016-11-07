/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   19-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

const User = require('mongoose').model('User');
const passport = require('passport');
const uuid = require('node-uuid');
const multiparty = require('multiparty');
const fs = require('fs');

exports.signup = (req, res) => {

  if (!req.user) {

      const user = new User(req.body);
      user.provider = 'local';
      user.type = 'guest';
      user.avatar = 'default_avatar.png';

      user.save((err) => {
          if (err) {
              res.status(404).json({
                  message: err,
                  success: false
              });
          } else {
              req.login(user, (err) => {
                  if (err) {
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
          }
      });

    } else {
      res.status(404).json({message: 'Something was wrong!'});
  }

};

exports.signin = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username},
        (err, user) => {
            if (err || !user || !user.authenticate(password) ) {
                console.log('err', err);
                console.log('user', user.password);
                console.log('pass', user.hashPassword(req.body.password))
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

exports.read = (req, res) => {
    res.status(200).json({user: req.user});
};

exports.update = (req, res) => {

    const user = req.user;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password ? user.hashPassword(req.body.password) : user.password;
    user.type = (req.body.type === undefined) ? req.user.type : req.body.type;

    User.findByIdAndUpdate(req.user.id, user, (err, user) => {
        if (err) {
            res.status(4040).json({
                message: 'Something was wrong!',
                success: false
            });
        } else {
            User.findOne({_id: user.id}, (err, user) => {
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
        if (err) {
            res.status(404).json({message: 'Something was wrong!'});
        }

        req.user = user;
        next();
    });
};

exports.requiresLogin = (req, res, next) => {

    if (!req.isAuthenticated()) {
         res.status(401).json({message: 'User is not logged in'});
    }

    next();

};
