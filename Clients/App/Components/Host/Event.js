/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   09-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 13-Nov-2016
*/

import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Styles from '../../Styles';

class Event extends React.Component {
    render() {
        let currentDate = new Date (this.props.data.event_date);
        currentDate = String(currentDate.toDateString());

        return (
            <View style={Styles.event}>
                <View style={Styles.event_content}>
                    <Text style={Styles.event_date}>
                        {currentDate}
                    </Text>
                    <Text style={Styles.event_title}>
                        {this.props.data.title}
                    </Text>
                    <View>                     
                    </View>
                </View>
            </View>
        );
    }
}

Event.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default Event;
