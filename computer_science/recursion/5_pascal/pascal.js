const pascal = function(n) {
    // 1. Guard clause: Ensure n is a valid positive integer
    if(typeof n !== 'number' || n === null) {
        return undefined;
    }

    // 2. Base case: The first row is always[1]
    if(n === 1) {
        return [1];
    }

    // 3. Recursive step: Get the previous row
    const prevRow = pascal(n - 1);
    const currentRow = [];
    
    // 4. Build the current row using the "hidden 0" Logic
    for(let i = 0; i <= prevRow.length; i++) {
        // If we are out of bounds on the left or right, default to 0
        const leftNeighbor = i === 0 ? 0 : prevRow[i - 1];
        const rightNeighbor = i === prevRow.length ? 0 : prevRow[i];

        currentRow.push(leftNeighbor + rightNeighbor);
    } 

    return currentRow;
  
};
  
// Do not edit below this line
module.exports = pascal;
