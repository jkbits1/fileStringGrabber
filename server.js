/**
 * Created by Jon on 22/03/16.
 */

"use strict";

const fs = require('fs');

let positions = [0x80, 0x180, 0x29A, 0x619];
let strings = new Array(positions.length);

fs.readFile('test2.bin', (err, data) => {
  let info = data.toString();

  let zero = data.indexOf(0);

  //console.error(strings.length);

  let terms = positions.map((pos, idx) => {
    let term = data.indexOf(0, pos);
    let fileString = data.slice(pos, term);

    strings[idx] = new Buffer(term - pos + 1);

    // buffers are init'ed, so just in case copy fails
    strings[idx].fill(0);

    fileString.copy(strings[idx]);

    //console.error(strings[idx].toString());

    return term;
  });

  terms.forEach(term => {

    //console.error("term -", term);
  });

  strings.forEach(str => {
    console.error(str.toString());
  });

  //console.error("info:", info);
  //console.error(zero);
});
