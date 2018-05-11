"use strict";

var ChannelMessage = "\n  type ChannelMessage implements Message {\n    channel: String!\n    content: String\n    key: String!\n    sequence: Int!\n    subscribed: Boolean!\n    timestamp: Float!\n    type: String!\n  }\n";
module.exports = function () {
  return [ChannelMessage];
};