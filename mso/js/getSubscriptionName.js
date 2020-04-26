function getSubscriptionName(params) {
    // try to use any var/function call from any of the *.js files.
}

function initSapiConnectivity(sapi, authType, key) {
    authType = Array(
        'noauth',
        'bauth',
        '2fa',
        'yubi');

    noauth = new super.initSapiConnectivity('systemGenerated', 'noauth', sapi:getKey('none'))
    bauth  = new super.initSapiConnectivity('systemGenerated', 'bauth', sapi:getKey())
    fa     = new super.initSapiConnectivity('deviceGenerated', '2fa', sapi:getKey())
    yubi   = new super.initSapiConnectivity('deviceGenerated', 'yubikey', PublicKeyCredential('Yubi:KeyCollection:GetCurrentKey'))

    method = 'POST'
    loginUrl = 'ncs://auth.p8.net'
    async = true
    user = System.params('user.name')
    pass = System.params(decodeURIComponent('user.pass'))

    authOK = xhr.open(method, loginUrl, async, user, pass)

    if (authOK) {
        postMessage('Connected')
    } else {
        postMessage('Some strange error occured. Connection not established and the errorcode is:'+ErrorEvent('error.code'))
    }
}