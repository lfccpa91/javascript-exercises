const sumAll = function(a, b) {
    let output = 0
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <0 || b < 0) {
        return "ERROR";
    } else if (a > b) {
        for (let i = b; i<=a; i++) {
            output += i;
        }
        return output;
    } else {
        for (let j = a; j<=b; j++) {
            output += j;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = sumAll;
