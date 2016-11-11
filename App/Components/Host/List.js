/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   07-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 09-Nov-2016
*/

import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Styles from '../../Styles';
import ButtonCreateEvent from './ButtonCreateEvent';
import Event from './Event';

class List extends React.Component {
    loadComponent(){
        this.props.loadComponent('create');
    }
    render() {
        const EVENTS = this.props.events;
        return (
            <View style={Styles.form_wrapper}>
                <View style={Styles.form_contentWrapper}>
                    <ScrollView style={Styles.form_contentTop}>
                        {EVENTS.map((event, index) => (
                            <Event key={index} data={event} />
                            ))
                        }
                    </ScrollView>
                </View>
                <ButtonCreateEvent loadComponent={() => this.loadComponent()}/>
            </View>
        );
    }
}

ButtonCreateEvent.propTypes = {
    events: React.PropTypes.array,
    loadComponent: React.PropTypes.func.isRequired,
};

export default List;
