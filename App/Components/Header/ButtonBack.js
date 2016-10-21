/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {TouchableHighlight, Text, Image} from 'react-native';
import Style from '../../Styles';

const BUTTONBACK = require('../../Assets/back.png');

class ButtonBack extends React.Component {
    loadMainView(){
        this.props.loadMainView();
    }
    render() {
        return (
            <TouchableHighlight
                style={Style.header_leftButton}
                onPress={() => this.loadMainView()}
                underlayColor='transparent'>
                <Image
                    style={Style.header_imageMenu}
                    source={BUTTONBACK} />
            </TouchableHighlight>
        );
    }
}

ButtonBack.propTypes={
    loadMainView: React.PropTypes.func.isRequired
};

export default ButtonBack;
