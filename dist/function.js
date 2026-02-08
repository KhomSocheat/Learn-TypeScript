"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(a, b) {
    return a * b;
}
function multiply2(a, b) {
    if (b) { //if b doesn't have value so it's only return a
        return a * b;
    }
    else {
        return a;
    }
}
function multiply3(a, b = 2) {
    return a * b;
}
function multiply4(...nums) {
    return nums.reduce((a, b) => {
        return a * b;
    });
}
let x = (str) => {
    return "hello" + str;
};
console.log(multiply(10, 20));
//# sourceMappingURL=function.js.map