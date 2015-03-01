function repeat(operation, num) {
    if (num <= 0) return;

    operation();
    setImmediate(repeat.bind(null, operation, --num));
}

// Model answer - will be faster as not async on every call
/*
function repeat(operation, num) {
    if (num <= 0) return

    operation()

    if (num % 5 === 0) {
        setTimeout(function() {
            repeat(operation, --num)
        })
    } else {
        repeat(operation, --num)
    }
}
*/

module.exports = repeat;