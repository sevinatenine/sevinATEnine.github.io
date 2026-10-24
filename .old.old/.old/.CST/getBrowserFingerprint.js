function getBrowserFingerprint() {
  var fingerprint = {};
  fingerprint.name = navigator.userAgent;
  fingerprint.version = navigator.appVersion;
  fingerprint.platform = navigator.platform;
  fingerprint.screenSize = {
    width: screen.width,
    height: screen.height
  };
  fingerprint.colorDepth = screen.colorDepth;
  fingerprint.pixelRatio = screen.devicePixelRatio;
  fingerprint.userAgent = navigator.userAgent;
  fingerprint.languages = navigator.languages;
  fingerprint.plugins = navigator.plugins;
  fingerprint.fonts = navigator.fonts;
  fingerprint.plugins = navigator.plugins;
  fingerprint.fonts = navigator.fonts;
  return fingerprint;
}

function getUID() {

    var finger = getBrowserFingerprint();
    var code = 1;

    for (i in finger) {
        // console.log(finger[i]);
        for (let j = 0; j < String(finger[i]).length; j++) {
            // console.log((String(finger[i])[j]).charCodeAt());
            code += 537*(Number((String(finger[i])[j]).charCodeAt()));
        }
    }
    return String(code);
}
