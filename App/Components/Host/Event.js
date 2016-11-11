/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   09-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 11-Nov-2016
*/

import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Styles from '../../Styles';

class Event extends React.Component {
    render() {
        return (
            <View style={Styles.event}>
                <View style={Styles.event_content}>
                    <Text style={Styles.event_title}>
                        {this.props.data.title}
                    </Text>
                </View>
            </View>
        );
    }
}

Event.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default Event;
