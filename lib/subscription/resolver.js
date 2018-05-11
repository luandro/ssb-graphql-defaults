'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../ssb/gossip/helpers');

exports.default = {
  gossip: {
    subscribe: function subscribe(parent, args, _ref) {
      var pubsub = _ref.pubsub,
          sbot = _ref.sbot;
      var connected = args.connected;

      var channel = Math.random().toString(36).substring(2, 15); // random channel name
      (0, _helpers.getConnectedPeers)(sbot, pubsub, channel, connected);
      return pubsub.asyncIterator(channel);
    }
  }
};