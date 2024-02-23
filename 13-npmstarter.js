// npm - global command , comes with node
// npm --version (to check version)

// local depandacy - use it only in the perticular project
// npm i <packagename>

// global depandacy - use it in all the project
//npm i -g <packagename>

// [For mac =- sudo npm i -g]

// ----------------------------------------------------------

// package.json (manifest file (stores important info about projects))

//-----------creating a package.json-----------------
// npm init (step by step press enter to skip)

// npm init -y (everything default)

const _ = require("lodash");

const item = [1, [2, [3, [4]]]];

const newItem = _.flattenDeep(item);

console.log(newItem);
