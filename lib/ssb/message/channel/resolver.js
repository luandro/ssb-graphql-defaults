'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _resolver = require('../default/resolver');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _extends3.default)({}, _resolver2.default, {
  channel: function channel(msg) {
    return msg.value.content.channel;
  },
  subscribed: function subscribed(msg) {
    return msg.value.content.subscribed;
  }
});