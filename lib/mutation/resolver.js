'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../ssb/message/helpers');

exports.default = {
  postMessage: function postMessage(_, _ref, _ref2) {
    var text = _ref.input.text;
    var sbot = _ref2.sbot;
    return (0, _helpers.publishMessage)({ type: 'post', text: text }, sbot);
  },
  aboutMessage: function aboutMessage(_, _ref3, _ref4) {
    var input = _ref3.input;
    var sbot = _ref4.sbot;
    var id = input.id,
        name = input.name,
        description = input.description;

    return (0, _helpers.publishMessage)({
      type: 'about',
      about: id,
      name: name,
      description: description
    }, sbot);
  }
};