'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnectedPeers = undefined;

var _pullStream = require('pull-stream');

var _pullStream2 = _interopRequireDefault(_pullStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getConnectedPeers = exports.getConnectedPeers = function getConnectedPeers(sbot, pubsub, channel, connected) {
  if (!sbot) {
    console.log('ERROR! Pass sbot to the function');
  }
  return (0, _pullStream2.default)(sbot.gossip.changes(), _pullStream2.default.filter(function (change) {
    if (connected) {
      return change.type === 'connect';
    }
    return change;
  }), _pullStream2.default.drain(function (gossip) {
    console.log('Connected: ', connected);
    console.log('network change', gossip);
    return pubsub.publish(channel, { gossip: gossip });
  }));
};