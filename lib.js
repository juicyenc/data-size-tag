// lib.js: library source.
// Licensed under Apache-2.0. Details in LICENSE.

// process data literal to bit value
function processString(str) {
    if (!(str instanceof String)) {
        throw new Error("file-size-tag/lib.js: none string parmeter is delivered to processString()");
    } else {
        var regex = /^(\d+)({KMGTEBGYkmgtebgy})(i?)({Bb})$/.compile();
        var result = str.match(regex);
        if (result === null) {
            throw new Error(`${str} is not data size.`);
        } else {
            var is1024 = result[3] === 'i';
            var isbit = result[4] === 'b';
            var prefix = result[2];
            var base = Number.parseInt(result[1]);
            var multiple;
            switch (prefix.toUpperCase()) {
                case 'K':
                    multiple = (is1024 ? 1 << 10 : 1000);
                    break;
                case 'M':
                    multiple = (is1024 ? 1 << 20 : 1000000);
                    break;
                case 'G':
                    multiple = (is1024 ? 1 << 30 : 1000000000);
                    break;
                case 'T':
                    multiple = (is1024 ? 1 << 40 : 1000000000000);
                    break;
                case 'E':
                    multiple = (is1024 ? 1 << 50 : 1000000000000000);
                    break;
                default:
                    throw new Error(`${str} is too large to calculate.`);
            }
            var answer = multiple * base;
            return isbit ? answer : answer << 3;
        }
    }
}

function bit(str, num) {
    if (num !== null) {
        if (num instanceof Number) {
            str = num.toString() + str[1];
        } else {
            throw new Error("the insert value should be a number.");
        }
    } else str = str[0];
    return processString(str);
}

var byte = (str, num) => bit(str, num) >> 3;

module.exports = {
    byte,
    bit,
}