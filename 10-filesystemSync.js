const { readFileSync, writeFileSync } = require("fs");

//seeing the text file
const first = readFileSync("./context/first.txt", "utf8");
const second = readFileSync("./context/second.txt", "utf8");

console.log(first, second);

///creating a newfile and seeing

writeFileSync(
  "./context/resolve-sync.txt",
  `Here is the result ${first}:${second}`,
  { flag: "a" }
);
