/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   22-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Image, Text} from 'react-native';
import Styles from '../../Styles';

class SwitchUserType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: this.props.userType
          };
    }

    componentDidMount(){
        this.checkUser(this.props.userType);
    }

    checkUser(value){
        switch(value) {
            case 'host':
                this.setState({
                    userType: 'host',
                    userText:'Switch to Guest'
                }) ;
                break;
            case 'guest':
                this.setState({
                    userType: 'guest',
                    userText:'Switch to Host'
                }) ;
                break;
        }
        this.props.switchUser(value);
    }

    switchUser() {
        const currentUser = (this.state.userType === 'guest') ? 'host' : 'guest';
        this.checkUser(currentUser);
    }

    render () {
        return(
            <View style={Styles.menu_itemMenu}>
                <Image
                    style={Styles.menu_itemIcon}
                    source={require('../../Assets/switch.png')} />
                <Text
                    onPress={() => this.switchUser()}
                    style={Styles.menu_item}>
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
