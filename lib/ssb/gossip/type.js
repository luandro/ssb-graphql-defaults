"use strict";

var Gossip = "\n  type Duration {\n    mean: Float\n    stdev: Float\n    count: Int\n    sum: Int\n    sqsum: Int\n  }\n  type Peer {\n    host: String\n    port: Int\n    key: String\n    source: String\n    state: String!\n    announcers: Int\n    duration: Duration\n    stateChange: Int\n    failure: Int\n    client: Boolean\n  }\n  type Gossip {\n    type: String!\n    peer: Peer\n  }\n";

module.exports = function () {
  return [Gossip];
};