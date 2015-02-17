function reduce(arr, fn, initial) {
    return (function reduceOne(index, aggregate) {
        if (index > arr.length - 1) return aggregate;
        return reduceOne(index + 1, fn(initial, arr[index], index, arr));
    })(0, initial);
}

module.exports = reduce;
