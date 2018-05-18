const ffi = require('ffi');
const ref = require('ref');
const path = require('path');

const shaker = ffi.Library(path.join(__dirname, '../target/release/librs_shaker'), {
  sayhello: [ "string", [] ],
  mix: [ "string", ["string", "string"]],
});


console.log(shaker.mix());
