"use strict";

var Query = "\n  type Query {\n    channels(id: String!): [Channel]\n    history(id: String! sequence: Int): [Message]\n    profile(id: String!): User\n    whoami: String\n  }\n";
module.exports = function () {
  return [Query];
};