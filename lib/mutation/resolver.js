'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ssbHelpers = require('ssb-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  postMessage: function postMessage(_, _ref, _ref2) {
    var text = _ref.input.text;
    var sbot = _ref2.sbot;
    return (0, _ssbHelpers.publishMessage)({ type: 'post', text: text }, sbot);
  },
  aboutMessage: function aboutMessage(_, _ref3, _ref4) {
    var input = _ref3.input;
    var sbot = _ref4.sbot;
    var id = input.id,
        name = input.name,
        description = input.description;

    return (0, _ssbHelpers.publishMessage)({
      type: 'about',
      about: id,
      name: name,
      description: description
      // image: {
      //   link: fileID,       // required
      //   width: widthInPx,   // optional, but recommended
      //   height: heightInPx, // optional, but recommended
      //   name: fileName,     // optional, but recommended
      //   size: sizeInBytes,  // optional, but recommended
      //   type: mimeType      // optional, but recommended
      // },
    }, sbot).then(function (msg) {
      return (0, _extends3.default)({
        id: msg.value.content.about
      }, msg.value.content);
    });
  }
};