function countWords(inputWords) {
    return inputWords.reduce(function (counts, word) {
        counts[word] = ++counts[word] || 1
        return counts
    }, {})
}

module.exports = countWords

