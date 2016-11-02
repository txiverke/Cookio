/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   28-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 28-Oct-2016
*/

const Guest = require('mongoose').model('Guest');

exports.create = (req, res) => {

        console.log('guest', req.body)
        const guest = new Guest(req.body);
        guest.creator = req.user;

        guest.save((err) => {

            if (err) {
                res.status(404).json({
                    message: 'Something was wrong!',
                    success: false
                });
            } else {
                res.status(200).json({
                    guest: guest,
                    success: true
                });
            }

        });

    };
