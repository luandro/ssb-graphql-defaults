"use strict";

var Mutation = "\n  input postInput {\n    text: String\n  }\n  input aboutInput {\n    name: String\n    description: String\n  }\n  type Mutation {\n    postMessage(input: postInput): PostMessage\n    aboutMessage(id: String! input: aboutInput): User\n  }\n";
module.exports = function () {
  return [Mutation];
};