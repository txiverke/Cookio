/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   24-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 02-Nov-2016
*/

import React from 'react';
import {AsyncStorage, View} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu/Menu.js';
import Styles from '../../Styles';
import Loader from '../Helpers/Loader';
import API from '../../Utils/Api';
import Guest from '../Guest/Guest';
import Host from '../Host/Host';

const components = {
    'guest': Guest,
    'host' : Host
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
        if (!this.props.user) {
            AsyncStorage.getItem('isLoggedIn', (err, result) => {
                const user = JSON.parse(result);
                const url = `api/users/${user._id}`;
                API.get(url).then((res) => {
                    this.setState({
                        user: res.user,
                        currentComponent: res.user.type,
                        noRenderComponent: false
                    });
                })
            });
        } else {
            console.log(this.props.user)
            this.setState({
                user: this.props.user,
                currentComponent: this.props.user.type,
                noRenderComponent: false
            })
        }
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

    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen});
    }

    updateMenuState(isOpen) {
        this.setState({isOpen});
    }

    switchUser(value) {
        const userType = String(value);
        if (userType !== this.state.currentComponent ) {
            this.toggleMenu();
            console.log('value', userType)
            this.setState({
                currentComponent: userType,
            });
            const value = {
                id: this.state.user.id,
                firstName: this.state.user.firstName,
                lastName: this.state.user.lastName,
                email: this.state.user.email,
                password: this.state.user.password,
                type: userType
            };
            const url = `api/users/${value.id}`;
            API.put(url, value).then((res) => {
                console.log()
                this.setState({user: res.user})
            });
        }
    }

    render() {
        if (this.state.noRenderComponent) {
            return (
                <Loader isLoading={this.state.isLoading} />
            )
        } else {
            const menu = <Menu
                onItemSelected={this.onMenuItemSelected}
                user={this.state.user}
                signOut={() => this.signOut()}
                switchUser={(value) => this.switchUser(value)}/>;
            const CurrentComponent = components[this.state.currentComponent];
            return (
                <SideMenu
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenuState(isOpen)}
                    openMenuOffset={310}>
                    <CurrentComponent
                        toggleMenu={() => this.toggleMenu()}
                        isLoaded={(value) => this.isLoaded(value)} />
                </SideMenu>
            );
        }
    }
}

Dashboard.propTypes = {
    user: React.PropTypes.object
}

export default Dashboard;
