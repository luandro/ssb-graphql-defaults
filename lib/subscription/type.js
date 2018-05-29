"use strict";

var Subscription = "\n  type Subscription {\n    gossip(connected: Boolean): Gossip\n    progress: Progress\n    history(id: String): PostMessage\n  }\n";

module.exports = function () {
  return [Subscription];
};