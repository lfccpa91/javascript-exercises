const findTheOldest = function(array) {
    array.sort((a,b) => {
        let aAge = 0;
        let bAge = 0;
        if(a.yearOfDeath===undefined) {
            aAge = (new Date().getFullYear())-a.yearOfBirth;
        }else {
            aAge = a.yearOfDeath - a.yearOfBirth;
        }
        if(b.yearOfDeath===undefined) {
            bAge = (new Date().getFullYear())-b.yearOfBirth;
        }else {
            bAge = b.yearOfDeath - b.yearOfBirth;
        }
        return aAge > bAge ? -1 : 1;

    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
