/**
* @Author: Vilà Albiol, Xavi <xavi>
* @Date:   13-Nov-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   xavi
* @Last modified time: 14-Nov-2016
*/

module.exports = {
    entry: './Clients/Web/App.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.html$/, loader: 'raw' },
        ]
    }
};
