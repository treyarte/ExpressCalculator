
class Calculator {
    
    /**
     * Calculate the mean of an array of numbers
     * @param {number} numArr 
     * @returns number
     */
   static mean(numArr){
        // Handle validation

        // sum reducer
        const sum = (prev, curr) => prev + curr;
        
        const length = numArr.length;

        // calc the sum of the array and divide it by it length
        return numArr.reduce(sum)/length
    }

    static  median(numArr) {
        // Handle Validation

        //Sort the original array
        numArr.sort();

        const mid = Math.floor((numArr.length - 1) /2);

        // Checking if the number array is even or odd
        const isEven = numArr.length % 2 === 0;

        // calculating the median
        return isEven ? (numArr[mid - 1] + numArr[mid]) / 2 : numArr[mid];

    }

    static mode(numArr) {
        let occurrences = {};
        let mostOccurred = null;
        let maxNum = 0;
      
        for (let val of numArr) {
          if (!occurrences[val]) {
            occurrences[val] = 1;
          } else {
            occurrences[val] += 1;
          }
        }
      
        for (const [k, v] of Object.entries(occurrences)) {
          if (v > maxNum) {
            maxNum = v;
            mostOccurred = k;
          }
        }
      
        let mode = Number(mostOccurred);
      
        return Number(mode);
    }

}

module.exports = Calculator;