'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProgress = undefined;

var _pullStream = require('pull-stream');

var _pullStream2 = _interopRequireDefault(_pullStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProgress = exports.getProgress = function getProgress(sbot, pubsub, channel) {
  if (!sbot) {
    console.log('ERROR! Pass sbot to the function');
  }
  console.log('starting progress');
  (0, _pullStream2.default)(sbot.progress(), _pullStream2.default.drain(function (progress) {
    console.log('progress', progress);
    return pubsub.publish(channel, { gossip: gossip });
  }));
};