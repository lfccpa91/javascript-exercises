const repeatString = function(stringInput, numberTimes) {
    if (numberTimes <0) {
        return "ERROR";
    } else {
        let answer="";
        for (let  i=1; i<=numberTimes; i++) {
            answer+=stringInput;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = repeatString;
