
exports.min = function min (array) {
    if (array===undefined || array.length<1) {
        return 0;
    }
    array.sort((a, b) => a - b);
    return array[0];
}

exports.max = function max (array) {
    if (array===undefined || array.length<1) {
        return 0;
    }
    array.sort((a, b) => a - b);
    return array[array.length-1];
}

exports.avg = function avg (array) {
    if (array===undefined || array.length<1) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result/array.length;
}
