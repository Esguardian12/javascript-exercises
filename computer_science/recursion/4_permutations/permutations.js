const permutations = function(arr) {
    // 1. Guard clause: Ensure the input is an array (to keep test suites happy)
    if(!Array.isArray(arr)) {
        return undefined;
    }

    // 2. Base case: An empty array has exactly one permutation, which is an empty arrays
    if(arr.length === 0) {
        return [[]];
    }

    const result = [];

    // 3. Loop through each number in the array
    for(let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];

        // 4. Create a new array of all the remaining numbers EXCEPT the current one
        const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));

        // 5. Recursively get all permutations of those remaining numbers
        const remainingPerms = permutations(remainingNums);

        // 6. Attach our current number to the front of every permutation returned
        for(let j = 0; j < remainingPerms.length; j++){
            result.push([currentNum].concat(remainingPerms[j]));
        }
    }

    return result;
};
  
// Do not edit below this line
module.exports = permutations;
