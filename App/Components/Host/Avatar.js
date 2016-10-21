/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../../Styles';
import Valoration from './Valoration';

const Avatar = ({name, uri, valoration}) => {
    return (
        <View style={Styles.content_avatar}>
            <Text style={Styles.content_avatarLeft}>{name}</Text>
            <View style={Styles.content_avatarImgWrapper}>
                <Image
                    style={Styles.content_avatarImg}
                    source={{uri: uri}} />
            </View>
            <View style={Styles.content_avatarRight}>
                <Text style={Styles.content_avatarTxt}>RATING:</Text>
                <Valoration value={valoration} />
            </View>
        </View>
    )
}

Avatar.propTypes = {
    name : React.PropTypes.string.isRequired,
    uri : React.PropTypes.string.isRequired,
    valoration : React.PropTypes.number.isRequired
};

export default Avatar;
