function arrayToObjectWithNames(array) {
    return array.map((item) => {
        return { name: item };
    });
}

function objectPropertiesToArray(object) {
    return Object.keys(object).map((key) => object[key]);
}

function formatConstantForInsert(constant) {
    return arrayToObjectWithNames(objectPropertiesToArray(constant));
}

module.exports = {
    objectPropertiesToArray,
    formatConstantForInsert
};
