var exec = require('cordova/exec');

exports.NoseDetectionPlugin = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'NoseDetectionPlugin', 'startDetection');
};
