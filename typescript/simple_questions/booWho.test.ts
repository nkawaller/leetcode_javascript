export = {}
const booWho = require('./booWho');


let boolCheckTrue = true;
let boolCheckFalse = "hello";

test('Check whether a value is a boolean', () => {
    expect(booWho(boolCheckTrue)).toBeTruthy
})

