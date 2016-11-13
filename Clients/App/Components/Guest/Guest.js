/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   01-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 09-Nov-2016
*/

import React from 'react';
import {View} from 'react-native';
import Map from './Map';
import List from './List';
import ButtonSwitchComponent from './ButtonSwitchComponent';
import Header from '../Header/Header.js';
import Styles from '../../Styles';

const type = 'View';
const components = {
    map: { name: Map, title: 'Event\'s Map'},
    list: { name: List, title: 'List of Events'}
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
        this.setState({
            isLoading: true,
            currentComponent: value
        });
    }

    toggleMenu() {
        this.props.toggleMenu();
    }

    setLoader(value) {
        this.setState({
            isLoading: value
        });
    }

    render() {
        const CurrentComponent = components[this.state.currentComponent].name;
        const currentTitle = components[this.state.currentComponent].title;
        return (
            <View style={Styles.wrapperContent}>
                <Header
                    toggleMenu={() => this.toggleMenu()}
                    type={type}
                    title={currentTitle}
                    isLoading={this.state.isLoading} />
                <CurrentComponent isLoading={(value) => this.setLoader(value)}/>
                <ButtonSwitchComponent
                    currentComponent={this.state.currentComponent}
                    renderComponent={(value) => this.renderComponent(value)} />
            </View>
        );
    }

}

Guest.propTypes = {
    toogleMenu: React.PropTypes.func
};

export default Guest;
