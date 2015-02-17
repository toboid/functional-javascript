module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function (result, item, idx) {
        return result.concat(fn(item, idx, arr));
    }, []);
};