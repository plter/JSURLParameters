(function () {

    window.jsup = window.jsup || {};

    jsup.decodeKVString = function (kvString) {
        var result = {};
        if (kvString && kvString.length > 1) {
            kvString = kvString.substr(1);
            var parts = kvString.split("&");
            if (parts) {
                parts.forEach(function (value) {
                    var kvPareArray = value.split("=");
                    if (kvPareArray && kvPareArray.length === 2) {
                        result[kvPareArray[0]] = kvPareArray[1];
                    }
                });
            }
        }
        return result;
    };

    jsup.decodeLocationSearch = function () {
        return jsup.decodeKVString(location.search);
    };

    jsup.decodeLocationHash = function () {
        return jsup.decodeKVString(location.hash);
    };

    jsup.decodeUrlParams = function () {
        return {search: jsup.decodeKVString(location.search), hash: jsup.decodeKVString(location.hash)};
    };
})();