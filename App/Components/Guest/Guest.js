/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   01-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 01-Nov-2016
*/

import React from 'react';
import {View} from 'react-native';
import Map from './Map';
import List from './List';
import ButtonSwitchComponent from './ButtonSwitchComponent';
import Header from '../Header/Header.js';
import Styles from '../../Styles';
import API from '../../Utils/Api';

const TITLE = 'Cookio';
const components = {
    'map': Map,
    'list': List
};

class Guest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            currentComponent: 'map'
        };
    }

    renderComponent(value) {
        this.setState({currentComponent: value});
    }

    isLoaded(value) {
        this.setState({isLoading: !value});
    }

    toggleMenu() {
        this.props.toggleMenu();
    }

    render() {
        const CurrentComponent = components[this.state.currentComponent];
        return (
            <View style={Styles.wrapperContent}>
                <Header
                    toggleMenu={() => this.toggleMenu()}
                    title={TITLE}
                    isLoading={this.state.isLoading} />
                <CurrentComponent isLoaded={(value) => this.isLoaded(value)} />
                <ButtonSwitchComponent
                    currentComponent={this.state.currentComponent}
                    renderComponent={(value) => this.renderComponent(value)} />
            </View>
        );
    }

}

export default Guest;
