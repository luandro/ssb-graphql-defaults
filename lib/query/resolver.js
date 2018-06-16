'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _ssbHelpers = require('ssb-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  channels: function channels(_, _ref, _ref2) {
    var id = _ref.id;
    var sbot = _ref2.sbot;
    return (0, _ssbHelpers.getChannels)({ id: id }, sbot);
  },
  history: function history(_, _ref3, _ref4) {
    var id = _ref3.id,
        sequence = _ref3.sequence;
    var sbot = _ref4.sbot;
    return (0, _ssbHelpers.getHistory)({ id: id, sequence: sequence }, sbot);
  },
  about: function about(_, _ref5, _ref6) {
    var id = _ref5.id;
    var sbot = _ref6.sbot;
    return (0, _ssbHelpers.getAbout)({ id: id }, sbot);
  },
  whoami: function whoami(_, obj, _ref7) {
    var sbot = _ref7.sbot;
    return (0, _ssbHelpers.getId)(sbot);
  },
  blob: function blob(_, _ref8, _ref9) {
    var hash = _ref8.hash;
    var sbot = _ref9.sbot;

    return (0, _ssbHelpers.getBlob)(sbot, hash).then(function (blob) {
      return {
        id: hash,
        stringified: (0, _stringify2.default)(blob)
      };
    });
  }
};