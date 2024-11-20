const reverseString = function(oldString) {
    const stringArray = oldString.split("");
    const reversedArray = stringArray.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
