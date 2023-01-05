var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
        this.storage = window.localStorage;
    }
    LocalStorage.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    LocalStorage.prototype.getByKeys = function (keys) {
        var result, value;
        result = [];
        for (var i = 0; i < keys.length; i++) {
            try {
                value = this.storage.getItem(keys[i]);
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
            this.storage.removeItem(keys[i]);
        }
    };
    LocalStorage.prototype.removeAll = function () {
        this.storage.clear();
    };
    return LocalStorage;
}());
