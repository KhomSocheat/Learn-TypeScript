"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
let shoseSize = size.medium;
console.log(shoseSize);
//# sourceMappingURL=index.js.map