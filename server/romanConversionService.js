var romanService = {};
var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

romanService.toRoman = toRoman;
romanService.fromRoman = fromRoman;

//To convert numaric to roman
function toRoman(num) {
    var result = '';
    for (var i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}

//To convert roman to numaric
function fromRoman(str) {
    var result = 0;
    for (var i = 0; i <= decimal.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += decimal[i];
            str = str.replace(roman[i], '');
        }
    }
    return result;
}

//module exports.
module.exports = romanService;