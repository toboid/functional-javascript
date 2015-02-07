function Spy(target, method) {
    var original = target[method
    var counter = { count: 0 }

    target[method] = function() {
        ++counter.count
        return original.apply(target, arguments)
    }

    return counter
}

module.exports = Spy
