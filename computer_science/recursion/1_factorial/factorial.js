const factorial = function(n) {
    // 1. Validate the input: must be a number, an integer, and non-negative
    if (typeof n !== 'number' || !Number.isInteger(n)|| n < 0){
        return undefined;
    }
    // 2. Base case: an input of 0 should return 1
    if(n === 0) {
        return 1;
    }

    // 3. Recursive step: n * factorial(n - 1)
    return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;