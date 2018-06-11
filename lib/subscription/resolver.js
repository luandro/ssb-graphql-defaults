'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ssbHelpers = require('ssb-helpers');

exports.default = {
  history: {
    subscribe: function subscribe(parent, args, _ref) {
      var pubsub = _ref.pubsub,
          sbot = _ref.sbot;
      var id = args.id,
          sequence = args.sequence;

      var channel = Math.random().toString(36).substring(2, 15); // random channel name
      (0, _ssbHelpers.getHistoryStream)({ id: id, sequence: sequence }, sbot, pubsub, channel);
      return pubsub.asyncIterator(channel);
    }
  },
  gossip: {
    subscribe: function subscribe(parent, args, _ref2) {
      var pubsub = _ref2.pubsub,
          sbot = _ref2.sbot;
      var connected = args.connected;

      var channel = 'GOSSIP';
      (0, _ssbHelpers.getConnectedPeers)(sbot, pubsub, channel, connected);
      return pubsub.asyncIterator(channel);
    }
  },
  progress: {
    subscribe: function subscribe(parent, args, _ref3) {
      var pubsub = _ref3.pubsub,
          sbot = _ref3.sbot;

      var channel = 'PROGRESS';
      (0, _ssbHelpers.getProgress)(sbot, pubsub, channel);
      return pubsub.asyncIterator(channel);
    }
  }
};