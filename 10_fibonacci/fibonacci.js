const fibonacci = function(number=1) {
    number = number*1;``
    const fibArray = [0,1];
    if (number<0) {
        return "OOPS";
    } else if (number<=1) {
        return fibArray[number];
    } else {
        for(let i = 1; i<number; i++) {
            fibArray.push(fibArray[i]+fibArray[i-1]);
        };
        return fibArray[number];
    }
};

// Do not edit below this line
module.exports = fibonacci;
