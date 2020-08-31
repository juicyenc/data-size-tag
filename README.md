# data-size-tag
An ES6 tag for calulation file size.

## usage
```javascript
var { bit, byte } = require('file-size-tag');
var size;
size = bit`4KB`; // (4 * 1000) byte * 8 bit/byte = 32000 bytes
size = byte`4KB`; // (4 * 1000) byte = 4000 bytes
size = bit`4Kib`; // (4 * 1024) bit = 4096 bits
size = byte`4Kib`; // (4 * 1024) bit * 0.125 byte/bit = 512 bytes
```
