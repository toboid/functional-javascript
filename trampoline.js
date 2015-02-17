function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    if (num % 1000 === 0) {
        return repeat.bind(null, operation, --num);
    } else {
        return repeat(operation, --num);
    }
}

function trampoline(fn) {
    var next = fn;
    while (true) {
        next = next();
        if (!next) {
            break;
        }
    }
}

module.exports = function (operation, num) {
    return trampoline(repeat(operation, num));
};

// Model answer
/*
function repeat(operation, num) {
    return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
    while(fn && typeof fn === 'function') {
        fn = fn()
    }
}

module.exports = function(operation, num) {
    trampoline(function() {
        return repeat(operation, num)
    })
}
*/
