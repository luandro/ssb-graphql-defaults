"use strict";

var DefaultMessage = "\n  type DefaultMessage implements Message {\n    content: String\n    key: String!\n    sequence: Int!\n    timestamp: Float!\n    type: String!\n  }\n";
module.exports = function () {
  return [DefaultMessage];
};