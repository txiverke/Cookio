/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   06-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: oocss.js
* @Last modified by:   txiverke
* @Last modified time: 18-Oct-2016
*/

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Styles from '../../Styles';
import NavBar from '../Header/Header';

const TITLE = 'Notifications';

class Notifications extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            isLoading: true
        };
    }
    render(){
        return (
            <View style={Styles.mapContainer}>
                <NavBar
                    loadMainView={() => this.props.navigator.pop()}
                    title={TITLE}
                    isLoading={this.state.isLoading}/>
            </View>
        );
    }
}

Notifications.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    id: React.PropTypes.number.isRequired
};

export default Notifications;
