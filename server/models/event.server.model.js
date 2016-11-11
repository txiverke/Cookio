/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   28-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 08-Nov-2016
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    background: [
        {
            type: String,
        }
    ],
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    description: {
        type: String
    },
    price: String,
    city: String,
    latitude: String,
    longitude: String,
    state: {
        type: String,
        enum: ['Open', 'Active', 'Closed']
    },
    activity_date: {
       type: Date
    },
    creator: {
        type: String
    }
});

mongoose.model('Event', EventSchema);
