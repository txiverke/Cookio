/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Dec-2016
*/

import React from 'react';
import Slider from 'react-image-slider';

class Home extends React.Component {
    render(){
        const images = [
            './assets/bg_1.jpg',
            './assets/bg_2.jpg',
            './assets/bg_3.jpg',
            './assets/bg_4.jpg'
        ];
        return (
            <div>
                <Slider
                    images={images}
                    isInfinite={true}
                    delay={10000}
                />
                <h1>HOME</h1>
            </div>
        );
    }
}

export default Home;
