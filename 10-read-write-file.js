const {readFileSync,writeFileSync, writeFile} = require("fs");


const path = require("path")
const readfilepath = path.join("./content","first.txt");
const first = readFileSync(readfilepath,"utf-8");
console.log(first);
const second = readFileSync("./content/second.txt");


writeFileSync("./content/result-sync.txt",`Here is the result of them : ${first}, ${second}`);



writeFileSync("./content/result-flag-a.txt",`Here is the result of them : ${first}, ${second}`,{flag:'a'});