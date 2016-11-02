/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   01-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 01-Nov-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Header/Header';
import Styles from '../../Styles';

const TITLE = 'Cookio';
/*const components = {
    'view': View,
    'edit': Edit,
    'list': List
};*/

class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }
    toggleMenu() {
        this.props.toggleMenu();
    }

    isLoaded(value) {
        this.setState({isLoading: !value});
    }
    render() {
        return (
            <View style={Styles.wrapperContent}>
            <Header
                toggleMenu={() => this.toggleMenu()}
                title={TITLE}
                isLoading={this.state.isLoading} />
                <Text isLoaded={() => this.isLoaded(true)}>Host</Text>
            </View>
        );
    }
}

export default Host;
