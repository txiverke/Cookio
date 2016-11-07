/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   01-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 07-Nov-2016
*/

import React from 'react';
import {View, Text} from 'react-native';
import Header from '../Header/Header';
import Styles from '../../Styles';
import Create from './Create';
import List from './List';

const type = 'View';
const components = {
    create: {
        name: Create,
        title: 'Create a new Event'
    },
    list: {
        name: List,
        title: 'Your Events'
    }
};

class Host extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            currentComponent: 'list'
        };
    }
    renderComponent(value) {
        this.setState((currentComponent: value))
    }
    toggleMenu() {
        this.props.toggleMenu();
    }

    isLoaded(value) {
        this.setState({isLoading: !value});
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
                    <CurrentComponent isLoaded={() => this.isLoaded(true)} />
            </View>
        );
    }
}

export default Host;
