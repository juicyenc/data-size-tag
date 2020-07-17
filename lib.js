// lib.js: library source.
// Licensed under Apache-2.0. Details in LICENSE.

// process data literal to bit value
function processString(str) {
    if (!(typeof(str) === 'string')) {
        throw new Error("file-size-tag/lib.js: none string parmeter is delivered to processString()");
    } else {
        var regex = /^(\d+)([KMGTEBZYkmgtebgy])(i?)([Bb])/;
        var result = str.match(regex);
        // console.log(result);
        if (result === null) {
            throw new Error(`${str} is not data size literal.`);
        } else {
            var is1024 = result[3] === 'i';
            var isbit = result[4] === 'b';
            var prefix = result[2];
            var base = BigInt(Number.parseInt(result[1]));
            var multiple = BigInt(0);
            switch (prefix.toUpperCase()) {
                case 'K':
                    multiple = (is1024 ? BigInt(1) << BigInt(10) : BigInt(1000));
                    break;
                case 'M':
                    multiple = (is1024 ? BigInt(1) << BigInt(20) : BigInt(1000000));
                    break;
                case 'G':
                    multiple = (is1024 ? BigInt(1) << BigInt(30) : BigInt(1000000000));
                    break;
                case 'T':
                    multiple = (is1024 ? BigInt(1) << BigInt(40) : BigInt(1000000000000));
                    break;
                case 'E':
                    multiple = (is1024 ? BigInt(1) << BigInt(50) : BigInt(1000000000000000));
                    break;
                case 'B':
                    multiple = (is1024 ? BigInt(1) << BigInt(60) : BigInt(1000000000000000000));
                    break;
                case 'Z':
                    multiple = (is1024 ? BigInt(1) << BigInt(70) : BigInt(1000000000000000000000));
                    break;
                case 'Z':
                    multiple = (is1024 ? BigInt(1) << BigInt(80) : BigInt(1000000000000000000000000));
                    break;
            }
            var answer = multiple * base;
            return isbit ? answer : answer << BigInt(3);
        }
    }
}

function bit(str, num) {
    // console.log(`${str}, ${num}`);
    if (num !== undefined) {
        if (typeof(num) === 'number') {
            str = num.toString() + str[1];
        } else {
            throw new Error("the insert value should be a number.");
        }
    } else str = str[0];
    // console.log(str);
    return processString(str);
}

var byte = (str, num) => bit(str, num) >> BigInt(3);

module.exports = {
    byte,
    bit,
}