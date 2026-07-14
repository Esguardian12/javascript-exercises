const contains = function(obj, value) {
    // Loop through all the values in the current level of the object
    for(const val of Object.values(obj)) {

        // 1. Base case: If the current value matches what we are looking for, return true
        if(val === value || (Number.isNaN(val) && Number.isNaN(value))){
            return true;
        } 

        // 2. Recursive step: If the current value is a nested object (and not null), search inside it
        if(typeof val === 'object' && val !== null){
            if(contains(val, value)) {
                return true;
            }
        }
    }

    // 3. If the loop finishes and nothing was found, return false
    return false;
};
  
// Do not edit below this line
module.exports = contains;
