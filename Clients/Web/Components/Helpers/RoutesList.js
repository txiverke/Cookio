/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   13-Dec-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Dec-2016
*/

const routes = {
    guest: [
        {route: '/sign-in', label: 'Log In', icon:'icon-enter'},
        {route: '/sign-up', label: 'Register', icon: 'icon-file-add'}
    ],
    user: [
        {route: '/profile', label: 'Profile', icon: 'icon-user'},
        {route: '/payment', label: 'Payment', icon: 'icon-store'},
        {route: '/notifications', label: 'Notifications', icon: 'icon-alarm'},
        {route: '/history', label: 'History', icon: 'icon-history'},
        {route: '/sign-out', label: 'Sign Out', icon: 'icon-exit'}
    ]
};

export default routes;
