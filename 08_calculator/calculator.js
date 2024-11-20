const add = function(a,b) {
return a+b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array=[]) {
	const totalSum = array.reduce((total, next) => {
    return total+next;
  },0);
  return totalSum;
};

const multiply = function(array=[]) {
  const totalTimes = array.reduce((total,next)=> {
    return total*next;
  },1);
  return totalTimes;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
  if (number <=0) {
    return 1;
  } else {
    let result = 1
    for (let i = number; i>0;i--) {
      result = result * i; 
    }
    return result;
  };
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
