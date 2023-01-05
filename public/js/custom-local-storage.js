var CustomLocalStorage = /** @class */ (function () {
    function CustomLocalStorage() {
    }
    CustomLocalStorage.prototype.set = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    CustomLocalStorage.prototype.getByKeys = function (keys) {
        var storage, result, value;
        storage = window.localStorage;
        result = [];
        for (var i = 0; i < keys.length; i++) {
            try {
                value = storage.getItem(keys[i]);
            }
            catch (e) {
                value = null;
            }
            result.push(value);
        }
        return (result.length > 1) ? result : result[0];
    };
    CustomLocalStorage.prototype.removeByKeys = function (keys) {
        for (var i = 0; i < keys.length; i++) {
            window.localStorage.removeItem(keys[i]);
        }
    };
    CustomLocalStorage.prototype.removeAll = function () {
        window.localStorage.clear();
    };
    return CustomLocalStorage;
}());
