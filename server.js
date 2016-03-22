/**
 * Created by Jon on 22/03/16.
 */

"use strict";

const fs = require('fs');

fs.readFile('test.bin', (err, data) => {
  let info = data.toString();

  console.error(info);
});
