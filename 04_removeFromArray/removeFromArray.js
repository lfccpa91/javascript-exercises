const removeFromArray = function(sourceArray, ...otherArgs ) {
    const outputArray = [];
    for (const item of sourceArray) {
        if (otherArgs.includes(item)) {
            continue
        } else {
            outputArray.push(item);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
