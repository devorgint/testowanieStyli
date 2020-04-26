/*
* Login Service Function. Serveing user login logic
* @author: macfanpl
*
* Usage :: Invoke by calling loginService() directly from within your code.
* 
* @TODO: Database handlers for Postgresql
*/
function loginService() {
/*    authType = Array(
        'noauth',
        'bauth',
        '2fa',
        'yubi');

    noauth = new super.initSapiConnectivity('systemGenerated', 'noauth', sapi:getKey('none'))
    bauth  = new super.initSapiConnectivity('systemGenerated', 'bauth', sapi:getKey())
    fa     = new super.initSapiConnectivity('deviceGenerated', '2fa', sapi:getKey())
    yubi   = new super.initSapiConnectivity('deviceGenerated', 'yubikey', PublicKeyCredential('Yubi:KeyCollection:GetCurrentKey'))
*/

    // Set all variables to correct values...
    method = 'POST'
    loginUrl = System.params('webroot.loginurl')
    async = true
    user = System.params('user.name')
    pass = System.params(decodeURIComponent('user.pass'))

    // ...and try to connect
    authOK = xhr.open(method, loginUrl, async, user, pass)

    // Check if connection is a success.
    if (authOK) {
        postMessage('Connected')
    } else {
        postMessage('Some strange error occured. Connection not established and the errorcode is:'+ErrorEvent('error.code'))
    }
}