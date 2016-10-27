/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   22-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 25-Oct-2016
*/

import React from 'react';
import {View, Image, Text} from 'react-native';
import Styles from '../../Styles';

class SwitchUserType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: this.props.userType,
            userText: ''
        };
    }

    componentDidMount(){
        this.checkUser();
    }

    checkUser(){
        switch(this.state.userType) {
            case 'Host':
                this.setState({
                    userType: 'Guest',
                    userText:'Switch to Host'
                }) ;
                break;
            case 'Guest':
                this.setState({
                    userType: 'Host',
                    userText:'Switch to Guest'
                }) ;
                break;
        }
    }

    render () {
        return(
            <View style={Styles.itemMenu}>
                <Image
                    style={Styles.itemIcon}
                    source={require('../../Assets/switch.png')} />
                <Text
                    onPress={() => this.checkUser()}
                    style={Styles.item}>
                    {this.state.userText}
                </Text>
            </View>
        );
    }
}

SwitchUserType.propTypes = {
    switchUser : React.PropTypes.func.isRequired,
    userType : React.PropTypes.string.isRequired
};

export default SwitchUserType;
