"use strict";

var Query = "\n  type Query {\n    connectedPeers: [Peer]\n    history(id: String! sequence: Int): [Message]\n    profile(id: String!): User\n    whoami: String\n  }\n";
module.exports = function () {
  return [Query];
};