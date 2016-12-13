/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   13-Dec-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 13-Dec-2016
*/

const routes = {
    guest: [
        {route: '/sign-in', label: 'Log In', icon:'icon-enter'},
        {route: '/sign-up', label: 'Register', icon: 'icon-file-add'}
    ],
    user: [
        {route: '/profile', label: 'Profile'},
        {route: '/payment', label: 'Payment'},
        {route: '/notifications', label: 'Notifications'},
        {route: '/history', label: 'History'},
        {route: '/sign-out', label: 'Sign Out'}
    ]
};

export default routes;
