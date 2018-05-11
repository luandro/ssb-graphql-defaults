"use strict";

var ContactMessage = "\n  type ContactMessage implements Message {\n    contact: User!\n    content: String\n    following: Boolean!\n    key: String!\n    sequence: Int!\n    timestamp: Float!\n    type: String!\n  }\n";
module.exports = function () {
  return [ContactMessage];
};