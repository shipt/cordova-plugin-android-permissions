var permissionsName = 'Permissions';

function Permissions() {
    this.ACCESS_COARSE_LOCATION = 'android.permission.ACCESS_COARSE_LOCATION';
}

function deprecated(name) {
  console.warn("Calling cordova.plugins.permissions." + name + " with the successCallback as first argument is deprecated");
  console.warn("The new signature is '" + name + "(permission, successCallback, errorCallback)'");
}

Permissions.prototype = {
    checkPermission: function(permission, successCallback, errorCallback) {
        successCallback( {hasPermission: true} );
    },
    requestPermission: function(permission, successCallback, errorCallback) {
        if (typeof permission === "function") {
            deprecated("requestPermission");
            successCallback = arguments[0];
            errorCallback = arguments[1];
            permission = arguments[2];
        }
        successCallback( {hasPermission: true} );
    },
    requestPermissions: function(permissions, successCallback, errorCallback) {
        successCallback( {hasPermission: true} );
    }
};

Permissions.prototype.hasPermission = function (permission, successCallback, errorCallback) {
    console.warn("hasPermission() function deprecated. Considers using checkPermission()");

    if (typeof permission === "function") {
        deprecated("hasPermission");
        successCallback = arguments[0];
        errorCallback = arguments[1];
        permission = arguments[2];
    }
    this.checkPermission.call(this, permission, successCallback, errorCallback);
};

module.exports = new Permissions();
