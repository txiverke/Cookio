/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 16-Nov-2016
*/

import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
                <img src="./assets/logo.png" alt="Cookio Logo" />
            </Link>
            <nav className="header-navWrapper" role="navigation">
                <ul className="header-navItems">
                    <li className="header-navItem">
                        <Link to="/sign-in">Sign In</Link>
                    </li>
                    <li className="header-navItem">
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
