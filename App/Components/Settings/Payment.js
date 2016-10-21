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
import Style from '../../Styles';
import NavBar from '../Header/Header';

const TITLE = 'Payment';

class Payment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            isLoading: true
        };
    }
    render(){
        return (
            <View style={Style.mapContainer}>
                <NavBar
                    loadMainView={() => this.props.navigator.pop()}
                    title={TITLE}
                    isLoading={this.state.isLoading}/>
            </View>
        );
    }
}

Payment.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    id: React.PropTypes.number.isRequired
};

export default Payment;
