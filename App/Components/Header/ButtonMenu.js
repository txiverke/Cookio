/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 01-Nov-2016
*/


import React from 'react';
import {TouchableHighlight, Text, Image} from 'react-native';
import Style from '../../Styles';

const BUTTONMENUOPEN = require('../../Assets/menu.png');

class ButtonMenu extends React.Component {
    toggleMenu(e) {
        this.props.toggleMenu();
    }
    render() {
        return (
            <TouchableHighlight
                style={Style.header_leftButton}
                onPress={(e) => this.toggleMenu(e)}
                underlayColor='transparent'>
                <Image
                    style={Style.header_imageMenu}
                    source={BUTTONMENUOPEN} />
            </TouchableHighlight>
        );
    }
}

ButtonMenu.propTypes = {
    toggleMenu: React.PropTypes.func.isRequired
};

export default ButtonMenu;
