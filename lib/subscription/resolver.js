'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../ssb/gossip/helpers');

var _helpers2 = require('../ssb/message/helpers');

exports.default = {
  history: {
    subscribe: function subscribe(parent, args, _ref) {
      var pubsub = _ref.pubsub,
          sbot = _ref.sbot;
      var id = args.id,
          sequence = args.sequence;

      var channel = Math.random().toString(36).substring(2, 15); // random channel name
      (0, _helpers2.getHistoryStream)({ id: id, sequence: sequence }, sbot, pubsub, channel);
      return pubsub.asyncIterator(channel);
      // pubsub.publish('commentAdded', { commentAdded: { id: 1, content: 'Hello!' }})
    }
  },
  gossip: {
    subscribe: function subscribe(parent, args, _ref2) {
      var pubsub = _ref2.pubsub,
          sbot = _ref2.sbot;
      var connected = args.connected;

      var channel = Math.random().toString(36).substring(2, 15); // random channel name
      (0, _helpers.getConnectedPeers)(sbot, pubsub, channel, connected);
      return pubsub.asyncIterator(channel);
    }
  }
};