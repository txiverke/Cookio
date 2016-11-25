/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   18-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 24-Nov-2016
*/

import React from 'react';
import {Link} from 'react-router';

const users = {
    guest: [
        {route: '/sign-in', label: 'Log In'},
        {route: '/sign-up', label: 'Register'}
    ],
    user: []
};

class MenuPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        const userType = this.props.user ? users.user : users.guest;
        const menuState = this.state.isOpen ? 'header-navRight open' : 'header-navRight close';
        const menuIcon = this.state.isOpen ? 'icon-cross-circle' : 'icon-menu';
        return (
            <nav className="header-navWrapper" role="navigation">
                <ul className="header-navItems">
                    <li className="header-navItem">
                        <span
                            onClick={this.toggleMenu}
                            className={menuIcon} />
                    </li>
                </ul>
                <ul className={menuState}>
                    {userType.map((user, index) => (
                        <li className="header-navRightItem" key={index}>
                            <Link to={user.route}>{user.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

MenuPhone.propTypes = {
    user: React.PropTypes.bool.isRequired
};

export default MenuPhone;
