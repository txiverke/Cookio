 /**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 24-Nov-2016
*/

import React from 'react';
import { Link } from 'react-router';
import MenuDesktop from './MenuDesktop';
import MenuPhone from './MenuPhone';

const PhoneSize = 720;

const Header = ({windowWidth, user}) => {
    const Nav = (windowWidth > PhoneSize) ? <MenuDesktop user={user} /> : <MenuPhone user={user} />;
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img src="./assets/logo.png" alt="Cookio Logo" />
            </Link>
            {Nav}
        </header>
    );
};

Header.propTypes = {
    windowWidth: React.PropTypes.number,
    user: React.PropTypes.bool
}

export default Header;
