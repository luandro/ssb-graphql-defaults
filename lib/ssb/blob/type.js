"use strict";

var SSBBlob = "\n  type SSBBlob {\n    id: String!\n    hex: String\n    path: String\n  }\n";
module.exports = function () {
  return [SSBBlob];
};