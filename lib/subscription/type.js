"use strict";

var Subscription = "\n  type Subscription {\n    gossip(connected: Boolean): Gossip!\n  }\n";

module.exports = function () {
  return [Subscription];
};