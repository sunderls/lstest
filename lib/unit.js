'use strict';
const fs = require('fs');

// accept second param to be spec file
let file = fs.readFileSync('./' + process.argv[2], 'utf8');
const Module = require('module');

// adjust folder
file = file.replace('require((.*)?)', 'require(../$1)');
new Module()._compile('\'use strict\';const test = require(\'./lib/unitTest.js\');' + file);
