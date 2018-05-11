'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../channel/helpers');

exports.default = {
  channels: function channels(obj, args, _ref) {
    var sbot = _ref.sbot;
    return (0, _helpers.getChannels)(obj, sbot);
  }
};