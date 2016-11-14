/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   13-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 13-Nov-2016
*/

exports.render = (req, res) => {

    if (req.session.lastVisit) {
        console.log('Last Visit ->', req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'Cookio'
    });

};
