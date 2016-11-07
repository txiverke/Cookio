/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   07-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../../Styles';
import ButtonCreateEvent from './ButtonCreateEvent';

class List extends React.Component {
    createEvent(){
        this.props.createEvent('create');
    }
    render() {
        return (
            <View style={Styles.form_contentTop}>
                <Text>List</Text>
                <ButtonCreateEvent
                    createEvent={() => this.createEvent()}/>
            </View>
        );
    }
}

ButtonCreateEvent.propTypes = {
    createEvent: React.PropTypes.func.isRequired
};

export default List;
