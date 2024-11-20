const palindromes = function (string="") {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
    const cleanString=string.toLowerCase().split("").filter(character => {
        return alphanumerical.includes(character);
    }).join("");
    const backwards = cleanString.split("").reverse().join("");

    return cleanString===backwards;
};

// Do not edit below this line
module.exports = palindromes;
