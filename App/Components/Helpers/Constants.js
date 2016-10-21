/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   04-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 39.57409;
const LONGITUDE = 2.65007;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Constants = {
    getMapConstants() {
        const mapConstants = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        };
        return mapConstants;
    }
};

export default Constants;
