// Detects if the program is running in Windows 96 or Node.js

const isW96 = typeof globalThis.w96 === "object";

if (isW96) {
    module.exports = await include("./binds/w96.js");
} else {
    module.exports = require("./binds/node.js");
}