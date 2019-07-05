#!/usr/bin/env node

// console.log(process)
const fs = require('fs');
const fileName = `./package.json`;
console.log(JSON.parse(fs.readFileSync(fileName)).config);
