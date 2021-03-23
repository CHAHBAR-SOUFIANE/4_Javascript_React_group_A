"use strict";

nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});

function thisBinding() {
  var _this = this;

  return function () {
    return console.log(_this.string);
  };
}