const sumAll = function(min, max) {
    // Check for negative numbers or non-number types
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
        return `ERROR`;
    }

    // Swap numbers if the first argument is larger than the second
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
