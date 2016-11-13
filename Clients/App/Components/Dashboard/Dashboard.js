/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   24-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 08-Nov-2016
*/

import React from 'react';
import {AsyncStorage} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from '../Menu/Menu.js';
import Styles from '../../Styles';
import Loader from '../Helpers/Loader';
import API from '../../Utils/Api';
import Guest from '../Guest/Guest';
import Host from '../Host/Host';

const components = {'guest': Guest, 'host' : Host};

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
            this.setState({
                user: this.props.user,
                currentComponent: this.props.user.type,
                noRenderComponent: false
            })
        }
    }

    /** SELECT A MENU COMPONENT **/
    onMenuItemSelected = (item, user) => {
        this.setState({isOpen: false});
        this.props.navigator.push({
            name: item,
            passProps: {user: user}
        });
    }

    /** SIGNOUT THE APP **/
    signOut() {
        AsyncStorage.removeItem('isLoggedIn');
        this.props.navigator.push({name: 'Init'});
    }

    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen});
    }

    updateMenuState(isOpen) {
        this.setState({isOpen});
    }

    /** CHANGE USER TYPE (Guest/Host) **/
    switchUser(value) {
        const userType = String(value);

        if (userType !== this.state.currentComponent ) {
            this.toggleMenu();
            this.setState({currentComponent: userType});
            const value = {
                id: this.state.user.id,
                firstName: this.state.user.firstName,
                lastName: this.state.user.lastName,
                email: this.state.user.email,
                password: '',
                type: userType
            };
            const url = `api/users/${value.id}`;

            API.put(url, value).then((res) => {
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
            const CurrentComponent = components[this.state.currentComponent];
            const menu = <Menu
                onItemSelected={this.onMenuItemSelected}
                user={this.state.user}
                signOut={() => this.signOut()}
                switchUser={(value) => this.switchUser(value)}/>;

            return (
                <SideMenu
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenuState(isOpen)}
                    openMenuOffset={310}>
                    <CurrentComponent
                        user={this.state.user}
                        toggleMenu={() => this.toggleMenu()}
                    />
                </SideMenu>
            );
        }
    }
}

Dashboard.propTypes = {
    user: React.PropTypes.object
}

export default Dashboard;
