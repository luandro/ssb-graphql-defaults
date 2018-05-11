"use strict";

var AboutMessage = "\n  type AboutMessage implements Message {\n    content: String\n    key: String!\n    name: String\n    sequence: Int!\n    timestamp: Float!\n    type: String!\n  }\n";
module.exports = function () {
  return [AboutMessage];
};