"use strict";

var User = "\n  type User {\n    channels: [Channel]\n    id: String!\n    name: String\n  }\n";

module.exports = function () {
  return [User];
};