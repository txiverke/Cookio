 /**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Dec-2016
*/

import React from 'react';
import { Link } from 'react-router';
import MenuDesktop from './MenuDesktop';
import MenuPhone from './MenuPhone';

const PhoneSize = 720;

const Header = ({windowWidth, logged, user}) => {
    const Nav = (windowWidth > PhoneSize)
                ? <MenuDesktop logged={logged} user={user} />
                : <MenuPhone logged={logged} user={user} />;

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
    logged: React.PropTypes.bool,
    user: React.PropTypes.string
}

export default Header;
