/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 28-Oct-2016
*/

import React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import Styles from '../../Styles';

const BUTTONBACK = require('../../Assets/back.png');

class ButtonBack extends React.Component {
    loadMainView(){
        this.props.loadMainView();
    }
    render() {
        return (
            <TouchableHighlight
                style={Styles.header_leftButton}
                onPress={() => this.loadMainView()}
                underlayColor='transparent'>
                <Image
                    style={Styles.header_imageMenu}
                    source={BUTTONBACK} />
            </TouchableHighlight>
        );
    }
}

ButtonBack.propTypes={
    loadMainView: React.PropTypes.func
};

export default ButtonBack;
