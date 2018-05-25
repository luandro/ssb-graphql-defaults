'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../ssb/message/helpers');

var _helpers2 = require('../ssb/user/helpers');

var _helpers3 = require('../ssb/channel/helpers');

exports.default = {
  // connectedPeers: (_, {}, { sbot }) => {
  //   return getConnectedPeers(sbot)
  //     .then(res => res)
  // },
  channels: function channels(_, _ref, _ref2) {
    var id = _ref.id;
    var sbot = _ref2.sbot;
    return (0, _helpers3.getChannels)({ id: id }, sbot);
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
// import { getConnectedPeers } from '../ssb/gossip/helpers';