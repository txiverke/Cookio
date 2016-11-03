/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   28-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 03-Nov-2016
*/

const Event = require('mongoose').model('Event');

exports.create = (req, res) => {

    const event = new Event(req.body);
    event.creator = req.user;

    event.save((err) => {
        if (err) {
            res.status(404).json({
                message: err,
                success: false
            });
        } else {
            res.status(200).json({
                event: event,
                success: true
            });
        }

    });

};

exports.list = (req, res) => {

};

exports.update = (req, res) => {

};

exports.eventByID = (req, res, next, id) => {

};
