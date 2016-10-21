/**
* @Author: Vilà Albiol, Xavi <txiverke>
* @Date:   18-Oct-2016
* @Email:  txiverke@gmail.com
* @Project: Cookio
* @Last modified by:   txiverke
* @Last modified time: 19-Oct-2016
*/

module.exports = {
    db : 'mongodb://txiverke:Tokio2017!@ds061206.mlab.com:61206/cookio_db_dev',
    sessionSecret: 'developmentSessionSecret',
    siteKey:'6LdCqhkTAAAAAMUwF5vT67gmUPUAOY2PEZdMesgF',
    secretKey:'6LdCqhkTAAAAAPnRnvag8Zttac3NH2alH0ElhGYo',
    facebook: {
        clientID: '1419714138356219',
        clientSecret: 'b89c0636003d251816b41e758f0470cc',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};
