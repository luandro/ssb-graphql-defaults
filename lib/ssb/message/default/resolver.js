"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  content: function content(msg) {
    return (0, _stringify2.default)(msg.value.content);
  },
  sequence: function sequence(msg) {
    return msg.value.sequence;
  },
  timestamp: function timestamp(msg) {
    return msg.value.timestamp;
  },
  type: function type(msg) {
    return msg.value.content.type;
  }
};