"use strict";

var Message = "\n  interface Message {\n    content: String\n    key: String!\n    sequence: Int!\n    timestamp: Float!\n    type: String!\n}\n";

module.exports = function () {
  return [Message];
};