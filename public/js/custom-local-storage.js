var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.set = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorage.prototype.getByKeys = function (keys) {
        var result, value;
        result = [];
        for (var i = 0; i < keys.length; i++) {
            try {
                value = window.localStorage.getItem(keys[i]);
            }
            catch (e) {
                value = null;
            }
            result.push(value);
        }
        return result.length > 1 ? result : result[0];
    };
    LocalStorage.prototype.removeByKeys = function (keys) {
        for (var i = 0; i < keys.length; i++) {
            window.localStorage.removeItem(keys[i]);
        }
    };
    LocalStorage.prototype.removeAll = function () {
        window.localStorage.clear();
    };
    return LocalStorage;
}());
