/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   24-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 27-Oct-2016
*/

import React from 'react';
import {AsyncStorage, View} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Map from './Map';
import List from './List';
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js';
import Styles from '../../Styles';
import ButtonGetList from './ButtonGetList';

const TITLE = 'Cookio';
const components = {
    'map': Map,
    'list': List
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isLoading: true,
            isOpen: false,
            noRenderComponent: true,
            currentComponent: ''
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('isLoggedIn', (err, result) => {
            this.setState({
                user: JSON.parse(result),
                currentComponent: 'map',
                noRenderComponent: false
            })
        });
    }

    onMenuItemSelected = (item, user) => {
        this.setState({isOpen: false});
        this.props.navigator.push({
            name: item,
            passProps: { user: user }
        });
    }

    signOut() {
        AsyncStorage.removeItem('isLoggedIn');
        this.props.navigator.push({
            name: 'Init'
        });
    }

    isLoaded(value) {
        this.setState({isLoading: !value})
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    renderComponent(value) {
        this.setState({currentComponent: value})
    }

    render() {
        if (this.state.noRenderComponent) return <View></View>
        const menu = <Menu
            onItemSelected={this.onMenuItemSelected}
            user={this.state.user}
            signOut={() => this.signOut()} />;
        const CurrentComponent = components[this.state.currentComponent];
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                openMenuOffset={310}>
                <View style={Styles.wrapperContent}>
                    <Header
                        toggle={() => this.toggle()}
                        title={TITLE}
                        isLoading={this.state.isLoading} />
                    <CurrentComponent isLoaded={(value) => this.isLoaded(value)}/>
                    <ButtonGetList renderComponent={(value) => this.renderComponent(value)}/>
                </View>
            </SideMenu>
        );
    }
}

export default Dashboard;
