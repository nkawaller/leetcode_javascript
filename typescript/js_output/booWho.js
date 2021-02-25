"use strict";
const booWho = (bool) => {
    return typeof bool === "boolean";
};
let boolCheckTrue = true;
let boolCheckFalse = "hello";
console.log(booWho(boolCheckTrue));
console.log(booWho(boolCheckFalse));
//# sourceMappingURL=booWho.js.map