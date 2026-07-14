const totalIntegers = function(data) {
  // 1. Guard clause: Return undefined if the input is not an object or array
  if(typeof data !== 'object' || data === null) {
    return undefined;
  }

  let count = 0;

  for(let key in data) {
    if(Object.prototype.hasOwnProperty.call(data, key)){
        const val = data[key];

        // 1. Base condition: If it's an integer, increment our count
        if(Number.isInteger(val)){
            count++;
        }
        // 2. Recursive step: If it's a nested array or object, recurse and add the result to count
        else if(typeof val === 'object' && val !== null){
            count += totalIntegers(val);
        }
    }
  }

  return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
