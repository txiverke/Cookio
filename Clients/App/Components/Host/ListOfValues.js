/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   17-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 19-Oct-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Styles';

const ListOfValues = ({title, value}) => {
    return (
        <View style={Styles.content_list}>
            <Text style={Styles.content_listTitle}>{title}:</Text>
            <Text style={Styles.content_listValue}>{value}</Text>
        </View>
    );
};

export default ListOfValues;
