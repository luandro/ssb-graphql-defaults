"use strict";

var SSBBlob = "\n  type SSBBlob {\n    id: String!\n    stringified: String!\n  }\n";
module.exports = function () {
  return [SSBBlob];
};