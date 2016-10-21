/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   04-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import Constants from '../Helpers/Constants';
import Style from '../../Styles';

const MAPCONSTANTS = Constants.getMapConstants();
const LOCATIONBUTTON = require('../../Assets/locationButton.png');

class ButtonCenterMap extends React.Component {
    centerMap() {
        const newRegion = {
            latitude : MAPCONSTANTS.latitude,
            longitude : MAPCONSTANTS.longitude,
            latitudeDelta : MAPCONSTANTS.latitudeDelta,
            longitudeDelta : MAPCONSTANTS.longitudeDelta
        };
        this.props.onRegionChange(newRegion);
    }

    render() {
        return (
            <TouchableHighlight
                style={Style.buttonViewWrapper}
                onPress={() => this.centerMap()}
                underlayColor='transparent' >
                <Image
                    style = {Style.buttonView}
                    source = {LOCATIONBUTTON} />
            </TouchableHighlight>
        );
    }
}

ButtonCenterMap.propTypes = {
    onRegionChange: React.PropTypes.func.isRequired
};

export default ButtonCenterMap;
