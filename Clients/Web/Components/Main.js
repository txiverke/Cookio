/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   14-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 12-Dec-2016
*/

import React from 'react';
import Header from './Header/Header';

function getSize() {
    return {
        w: window.innerWidth,
        h: window.innerHeight
    };
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: false };
        this.onResize = this.onResize.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        if(typeof window !== 'undefined') {
            window.addEventListener('resize', this.onResize, false);
        }
    }

    componentWillUnmount() {
        if(typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize);
        }
    }

    updateDimensions() {
        const windowSize = getSize();
        this.setState({
            windowWidth: windowSize.w,
            windowHeigth: windowSize.h
        });
    }

    onResize() {
        if (this.rqf) return;
        if(typeof window !== 'undefined') {
            this.rqf = window.requestAnimationFrame(() => {
                this.rqf = null;
                this.updateDimensions();
            });
         }
     }

     render() {
         const windowWidth = this.state.windowWidth;
         const user = this.state.user;
         return (
             <div className="">
                 <Header windowWidth={windowWidth} user={user}/>
                 <section className="content-wrapper">
                     {this.props.children}
                 </section>
             </div>
         );
     }
}

export default Main;
