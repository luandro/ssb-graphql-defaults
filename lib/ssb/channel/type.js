"use strict";

var Channel = "\n  type Channel {\n    name: String!\n    subscribed: Boolean\n  }\n";
module.exports = function () {
  return [Channel];
};