/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import ButtonMenu from './ButtonMenu';
import ButtonBack from './ButtonBack';
import Style from '../../Styles';

const Header = ({toggleMenu, title, type, loadMainView, isLoading}) => {
    let leftButton;
    if (type === 'Loading') {
        leftButton = <View style={Style.header_leftButton}></View>;
    } else if (type === 'View') {
        leftButton = <ButtonMenu toggleMenu={toggleMenu} />;
    } else {
        leftButton = <ButtonBack loadMainView={loadMainView}/>;
    }

    return (
        <View style={Style.header}>
            {leftButton}
            <Text style={Style.header_title}>{title}</Text>
            <View style={Style.header_rightButton}>
                <ActivityIndicator
                    style={Style.header_loader}
                    animating={isLoading}
                    size="small"
                    color="#262938" />
            </View>
        </View>
    )
};

Header.propTypes = {
    toggleMenu: React.PropTypes.func,
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    loadMainView: React.PropTypes.func,
    isLoading: React.PropTypes.bool.isRequired
}

export default Header;
