"use strict";

var Mutation = "\n  input postInput {\n    text: String\n  }\n  input aboutInput {\n    id: String!\n    name: String\n    description: String\n  }\n  type Mutation {\n    postMessage(input: postInput): PostMessage\n    aboutMessage(input: aboutInput): AboutMessage\n  }\n";
module.exports = function () {
  return [Mutation];
};