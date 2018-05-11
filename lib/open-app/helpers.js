'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listApplications = undefined;

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listApplications = exports.listApplications = function listApplications(sbot) {
  return new _promise2.default(function (resolve, reject) {
    console.log('SBOT', sbot);
    sbot.communityApps.get(function (err, view) {
      if (err) reject(err);
      resolve((0, _values2.default)(view));
    });
  });
};