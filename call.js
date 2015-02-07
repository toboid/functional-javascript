function duckCount() {
    if(!arguments.length) return 0
    var result = Object.hasOwnProperty.call(arguments[0], 'quack') ? 1 : 0
    return duckCount.apply(null, [].slice.call(arguments, 1)) + result
}

// Official
/*
function duckCount() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}
*/


module.exports = duckCount
