// require("./7-mind-grenade")


const path = require('path');
console.log(path.sep);

const filepath = path.join("../content/", "subfolder","test1.txt");
console.log(filepath);
const basename = path.basename(filepath);
console.log(basename);


const absolute = path.resolve(__dirname,"content","subfolder","test1.txt");
console.log(absolute);