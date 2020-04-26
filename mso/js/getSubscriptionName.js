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
    
}
