var slice = [].slice

function logger(namespace) {
    return function() {
        var newArgs = [namespace].concat(slice.call(arguments));
        console.log.apply(console, newArgs)
    }
}

module.exports = logger
