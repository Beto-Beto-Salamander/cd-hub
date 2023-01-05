var CustomLocalStorage = {};

CustomLocalStorage.set = function (key, value) {
    window.localStorage.setItem(key, value);
}

CustomLocalStorage.getByKeys = function (params) {
    var storage, result, value;

    storage = window.localStorage;
    result = [];

    for (var i = 0; i < params.keys.length; i++) {
        try {
            value = storage.getItem(params.keys[i]);
        } catch (e) {
            value = null;
        }

        result.push(value);
    }

    return (result.length > 1) ? result : result[0];

}

CustomLocalStorage.removeByKeys = function (params) {
    for (var i = 0; i < params.keys.length; i++) {
        window.localStorage.removeItem(params.keys)
    }
}

CustomLocalStorage.removeAll = function () {
    window.localStorage.clear();
}