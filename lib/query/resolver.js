'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _helpers = require('../ssb/message/helpers');

var _helpers2 = require('../ssb/user/helpers');

var _helpers3 = require('../ssb/gossip/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  connectedPeers: function connectedPeers(_, _ref, _ref2) {
    var sbot = _ref2.sbot;
    (0, _objectDestructuringEmpty3.default)(_ref);

    return (0, _helpers3.getConnectedPeers)(sbot).then(function (res) {
      return res;
    });
  },
  history: function history(_, _ref3, _ref4) {
    var id = _ref3.id,
        sequence = _ref3.sequence;
    var sbot = _ref4.sbot;
    return (0, _helpers.getHistory)({ id: id, sequence: sequence }, sbot);
  },
  profile: function profile(_, _ref5, _ref6) {
    var id = _ref5.id;
    var sbot = _ref6.sbot;
    return (0, _helpers2.getProfile)({ id: id }, sbot);
  },
  whoami: function whoami(_, obj, _ref7) {
    var sbot = _ref7.sbot;
    return (0, _helpers2.getId)(sbot);
  }
};