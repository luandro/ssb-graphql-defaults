'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishMessage = exports.getLinks = exports.getHistoryStream = exports.getHistory = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _pullStream = require('pull-stream');

var _pullStream2 = _interopRequireDefault(_pullStream);

var _ssbRef = require('ssb-ref');

var _ssbRef2 = _interopRequireDefault(_ssbRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHistory = exports.getHistory = function getHistory(_ref, sbot) {
  var id = _ref.id,
      _ref$sequence = _ref.sequence,
      sequence = _ref$sequence === undefined ? 0 : _ref$sequence;
  return new _promise2.default(function (resolve, reject) {
    if (!_ssbRef2.default.isFeedId(id)) {
      reject(console.log(id + ' is not a valid feed ID'));
    }
    (0, _pullStream2.default)(sbot.createHistoryStream({ id: id, sequence: sequence }), _pullStream2.default.collect(function (err, msgs) {
      if (err) {
        reject(err);
      }resolve(msgs);
    }));
  });
};

var getHistoryStream = exports.getHistoryStream = function getHistoryStream(_ref2, sbot, pubsub, channel) {
  var id = _ref2.id,
      _ref2$sequence = _ref2.sequence,
      sequence = _ref2$sequence === undefined ? 0 : _ref2$sequence;

  if (!_ssbRef2.default.isFeedId(id)) {
    reject(console.log(id + ' is not a valid feed ID'));
  }
  console.log('Starting', sbot.createHistoryStream);
  (0, _pullStream2.default)(sbot.createHistoryStream({ id: id, sequencex: sequencex }), _pullStream2.default.drain(function (message) {
    console.log('Got msg', message);
    return pubsub.publish(channel, { message: message });
  }));
};

var getLinks = exports.getLinks = function getLinks(_ref3, sbot) {
  var source = _ref3.source,
      dest = _ref3.dest,
      rel = _ref3.rel;
  return new _promise2.default(function (resolve, reject) {
    (0, _pullStream2.default)(sbot.links({ source: source, dest: dest, rel: rel, values: true }), _pullStream2.default.collect(function (err, msgs) {
      if (err) {
        reject(err);
      }resolve(msgs);
    }));
  });
};

var publishMessage = exports.publishMessage = function publishMessage(content, sbot) {
  return new _promise2.default(function (resolve, reject) {
    sbot.publish(content, function (err, msg) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(msg);
    });
  });
};