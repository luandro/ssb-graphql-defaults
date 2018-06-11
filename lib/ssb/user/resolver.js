'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ssbHelpers = require('ssb-helpers');

exports.default = {
  channels: function channels(obj, args, _ref) {
    var sbot = _ref.sbot;
    return (0, _ssbHelpers.getChannels)(obj, sbot);
  }
};