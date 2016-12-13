/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   18-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 13-Dec-2016
*/

import React from 'react';
import routesList from '../Helpers/RoutesList';

class MenuPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const isOpen = this.state.isOpen;
        const userType = this.props.user ? routesList.user : routesList.guest;
        const menuState = isOpen ? 'header-navRight open' : 'header-navRight close';
        const menuIcon = isOpen ? 'icon-cross-circle close' : 'icon-menu';
        const menuBackgournd = isOpen ? 'header-background open' : 'header-background close';

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
                            <a onClick={this.toggleMenu} href={user.route}>
                                {user.label}
                                <span className={user.icon}></span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={this.toggleMenu}
                    className={menuBackgournd}>
                </div>
            </nav>
        );
    }
}

MenuPhone.propTypes = {
    user: React.PropTypes.bool.isRequired
};

export default MenuPhone;
