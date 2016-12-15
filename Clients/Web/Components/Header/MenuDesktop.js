/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   18-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Dec-2016
*/

import React from 'react';
import { Link } from 'react-router';
import routesList from '../Helpers/RoutesList';

const MenuDesktop = ({logged, user}) => {
    const userType = logged ? routesList.user : routesList.guest;

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
    logged: React.PropTypes.bool.isRequired,
    user: React.PropTypes.string.isRequired
}

export default MenuDesktop;
