/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   12-Dec-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 13-Dec-2016
*/

import React from 'react';

class Guest extends React.Component {
    render() {
        return (
            <div>
                <h2>Just the Guest View {this.props.username}</h2>
            </div>
        );
    }
}

export default Guest;
