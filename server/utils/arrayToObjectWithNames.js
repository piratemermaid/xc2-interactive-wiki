function arrayToObjectWithNames(array) {
    return array.map((item) => {
        return { name: item };
    });
}

module.exports = arrayToObjectWithNames;
