'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlob = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _pullStream = require('pull-stream');

var _pullStream2 = _interopRequireDefault(_pullStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBlob = exports.getBlob = function getBlob(sbot, hash) {
  return new _promise2.default(function (resolve, reject) {
    (0, _pullStream2.default)(sbot.blobs.get(hash), _pullStream2.default.collect(function (err, blob) {
      if (err) {
        reject(err);
      }resolve(blob);
    }));
  });
};