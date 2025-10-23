const sumAll = function(lowerBound, upperBound) {

    let result = 0;

    if  (lowerBound > upperBound) { 
        [lowerBound, upperBound] = [upperBound, lowerBound];
    }

    if (lowerBound < 0 || !upperBound < 0) return 'ERROR';
    
    if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) return "ERROR";

    for(let i = lowerBound; i <= upperBound; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
