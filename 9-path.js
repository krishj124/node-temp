const path = require("path");

// seperstor
console.log(path.sep);

//join file path
const filepath = path.join("context", "subfolder", "txt.file");
console.log(filepath);

//basename late file name it will give

const base = path.basename(filepath);
console.log(base);

//path.resolve (absolute path)

const absolute = path.resolve(__dirname, "context", "subfolder", "txt.file");
console.log(absolute);
