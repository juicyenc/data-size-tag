var { equal } = require('assert');

var { byte, bit } = require('../lib');

describe("Testing for byte func", function() {
    describe("Basic testing", function() {
        // Kilo
        it(" should be 1024 for 1KiB in bytes", () => equal(byte `1KiB`, BigInt(1024)));
        it(" should be 128 for 1Kib in bytes", () => equal(byte `1Kib`, BigInt(128)));
        it(" should be 1000 for 1KB in bytes", () => equal(byte `1KB`, BigInt(1000)));
        it(" should be 125 for 1Kb in bytes", () => equal(byte `1Kb`, BigInt(125)));

        it(" should be 1024 for 1kiB in bytes", () => equal(byte `1kiB`, BigInt(1024)));
        it(" should be 128 for 1kib in bytes", () => equal(byte `1kib`, BigInt(128)));
        it(" should be 1000 for 1kB in bytes", () => equal(byte `1kB`, BigInt(1000)));
        it(" should be 125 for 1kb in bytes", () => equal(byte `1kb`, BigInt(125)));


        //Titian
        it(" should be 2^40 for 1TiB in bytes", () => equal(byte `1TiB`, BigInt(1) << BigInt(40)));
        it(" should be 2^37 for 1Tib in bytes", () => equal(byte `1Tib`, BigInt(1) << BigInt(37)));
        it(" should be 10^12 for 1TB in bytes", () => equal(byte `1TB`, BigInt(1000000000000)));
        it(" should be 125 * 10^9 for 1Tb in bytes", () => equal(byte `1Tb`, BigInt(125000000000)));

        it(" should be 2^40 for 1tiB in bytes", () => equal(byte `1tiB`, BigInt(1) << BigInt(40)));
        it(" should be 2^37 for 1tib in bytes", () => equal(byte `1tib`, BigInt(1) << BigInt(37)));
        it(" should be 10^12 for 1tB in bytes", () => equal(byte `1tB`, BigInt(1000000000000)));
        it(" should be 125 * 10^9 for 1tb in bytes", () => equal(byte `1tb`, BigInt(125000000000)));


        //Million
        it(" should be 2^20 for 1MiB in bytes", () => equal(byte `1MiB`, BigInt(1) << BigInt(20)));
        it(" should be 2^17 for 1Mib in bytes", () => equal(byte `1Mib`, BigInt(1) << BigInt(17)));
        it(" should be 1000000 for 1MB in bytes", () => equal(byte `1MB`, BigInt(1000000)));
        it(" should be 125000 for 1Mb in bytes", () => equal(byte `1Mb`, BigInt(125000)));

        it(" should be 2^20 for 1miB in bytes", () => equal(byte `1miB`, BigInt(1) << BigInt(20)));
        it(" should be 2^17 for 1mib in bytes", () => equal(byte `1mib`, BigInt(1) << BigInt(17)));
        it(" should be 1000000 for 1mB in bytes", () => equal(byte `1mB`, BigInt(1000000)));
        it(" should be 125000 for 1mb in bytes", () => equal(byte `1mb`, BigInt(125000)));


        //Giga
        it(" should be 2^30 for 1GiB in bytes", () => equal(byte `1GiB`, BigInt(1) << BigInt(30)));
        it(" should be 2^27 for 1Gib in bytes", () => equal(byte `1Gib`, BigInt(1) << BigInt(27)));
        it(" should be 1000 for 1GB in bytes", () => equal(byte `1GB`, BigInt(1000000000)));
        it(" should be 125 for 1Gb in bytes", () => equal(byte `1Gb`, BigInt(125000000)));

        it(" should be 2^30 for 1giB in bytes", () => equal(byte `1giB`, BigInt(1) << BigInt(30)));
        it(" should be 2^27 for 1gib in bytes", () => equal(byte `1gib`, BigInt(1) << BigInt(27)));
        it(" should be 1000 for 1gB in bytes", () => equal(byte `1gB`, BigInt(1000000000)));
        it(" should be 125 for 1gb in bytes", () => equal(byte `1gb`, BigInt(125000000)));

        // TODO: Fulfill the test. Too tired.
    });

    describe("Exception testing", function() {
        it(" should raise \"not a data size literal.\"", () => {
            try {
                byte `Kb`;
            } catch (error) {
                equal(error.message, "Kb is not data size literal.");
            }
        });
        it(" should raise \"the insert value is not a number.\"", () => {
            try {
                byte `${"aaa"}Kb`;
            } catch (error) {
                equal(error.message, "the insert value should be a number.");
            }
        });
    });
});

describe("Testing for bit func", function() {
    describe("Basic testing", function() {
        // Kilo
        it(" should be 8192 for 1KiB in bits", () => equal(bit `1KiB`, BigInt(8192)));
        it(" should be 1024 for 1Kib in bits", () => equal(bit `1Kib`, BigInt(1024)));
        it(" should be 8000 for 1KB in bits", () => equal(bit `1KB`, BigInt(8000)));
        it(" should be 1000 for 1Kb in bits", () => equal(bit `1Kb`, BigInt(1000)));

        it(" should be 8192 for 1kiB in bits", () => equal(bit `1kiB`, BigInt(8192)));
        it(" should be 1024 for 1kib in bits", () => equal(bit `1kib`, BigInt(1024)));
        it(" should be 8000 for 1kB in bits", () => equal(bit `1kB`, BigInt(8000)));
        it(" should be 1000 for 1kb in bits", () => equal(bit `1kb`, BigInt(1000)));


        //Titian
        it(" should be 2^43 for 1TiB in bits", () => equal(bit `1TiB`, BigInt(1) << BigInt(43)));
        it(" should be 2^40 for 1Tib in bits", () => equal(bit `1Tib`, BigInt(1) << BigInt(40)));
        it(" should be 8 * 10^12 for 1TB in bits", () => equal(bit `1TB`, BigInt(8000000000000)));
        it(" should be 10^12 for 1Tb in bits", () => equal(bit `1Tb`, BigInt(1000000000000)));

        it(" should be 2^43 for 1tiB in bits", () => equal(bit `1tiB`, BigInt(1) << BigInt(43)));
        it(" should be 2^40 for 1tib in bits", () => equal(bit `1tib`, BigInt(1) << BigInt(40)));
        it(" should be 8 * 10^12 for 1tB in bits", () => equal(bit `1tB`, BigInt(8000000000000)));
        it(" should be 10^12 for 1tb in bits", () => equal(bit `1tb`, BigInt(1000000000000)));


        //Million
        it(" should be 2^23 for 1MiB in bits", () => equal(bit `1MiB`, BigInt(1) << BigInt(23)));
        it(" should be 2^20 for 1Mib in bits", () => equal(bit `1Mib`, BigInt(1) << BigInt(20)));
        it(" should be 8000000 for 1MB in bits", () => equal(bit `1MB`, BigInt(8000000)));
        it(" should be 1000000 for 1Mb in bits", () => equal(bit `1Mb`, BigInt(1000000)));

        it(" should be 2^23 for 1miB in bits", () => equal(bit `1miB`, BigInt(1) << BigInt(23)));
        it(" should be 2^20 for 1mib in bits", () => equal(bit `1mib`, BigInt(1) << BigInt(20)));
        it(" should be 8000000 for 1mB in bits", () => equal(bit `1mB`, BigInt(8000000)));
        it(" should be 1000000 for 1mb in bits", () => equal(bit `1mb`, BigInt(1000000)));


        //Giga
        it(" should be 2^33 for 1GiB in bits", () => equal(bit `1GiB`, BigInt(1) << BigInt(33)));
        it(" should be 2^30 for 1Gib in bits", () => equal(bit `1Gib`, BigInt(1) << BigInt(30)));
        it(" should be 8000000000 for 1GB in bits", () => equal(bit `1GB`, BigInt(8000000000)));
        it(" should be 1000000000 for 1Gb in bits", () => equal(bit `1Gb`, BigInt(1000000000)));

        it(" should be 2^33 for 1giB in bits", () => equal(bit `1giB`, BigInt(1) << BigInt(33)));
        it(" should be 2^30 for 1gib in bits", () => equal(bit `1gib`, BigInt(1) << BigInt(30)));
        it(" should be 8000000000 for 1gB in bits", () => equal(bit `1gB`, BigInt(8000000000)));
        it(" should be 1000000000 for 1gb in bits", () => equal(bit `1gb`, BigInt(1000000000)));

        // TODO: Fulfill the test. Too tired.
    });

    describe("Exception testing", function() {
        it(" should raise \"not a data size literal.\"", () => {
            try {
                bit `Kb`;
            } catch (error) {
                equal(error.message, "Kb is not data size literal.");
            }
        });
        it(" should raise \"the insert value is not a number.\"", () => {
            try {
                bit `${"aaa"}Kb`;
            } catch (error) {
                equal(error.message, "the insert value should be a number.");
            }
        });
    });
});