/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   18-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 25-Nov-2016
*/

import React from 'react';
import { Link } from 'react-router';

const users = {
    guest: [
        {route: '/sign-in', label: 'Log In'},
        {route: '/sign-up', label: 'Register'}
    ],
    user: []
}

const MenuDesktop = ({user}) => {
    const userType = user ? users.user : users.guest;
    return (
        <nav className="header-navWrapper" role="navigation">
            <ul className="header-navItems">
                {userType.map((user, index) => (
                    <li className="header-navItem" key={index}>
                        <Link to={user.route}>{user.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

MenuDesktop.propTypes = {
    user: React.PropTypes.bool.isRequired
}

export default MenuDesktop;
