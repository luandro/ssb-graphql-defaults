'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolver = require('./ssb/message/about/resolver');

var _resolver2 = _interopRequireDefault(_resolver);

var _resolver3 = require('./ssb/channel/resolver');

var _resolver4 = _interopRequireDefault(_resolver3);

var _resolver5 = require('./ssb/message/channel/resolver');

var _resolver6 = _interopRequireDefault(_resolver5);

var _resolver7 = require('./ssb/message/contact/resolver');

var _resolver8 = _interopRequireDefault(_resolver7);

var _resolver9 = require('./ssb/message/default/resolver');

var _resolver10 = _interopRequireDefault(_resolver9);

var _resolver11 = require('./ssb/message/resolver');

var _resolver12 = _interopRequireDefault(_resolver11);

var _resolver13 = require('./ssb/message/post/resolver');

var _resolver14 = _interopRequireDefault(_resolver13);

var _resolver15 = require('./query/resolver');

var _resolver16 = _interopRequireDefault(_resolver15);

var _resolver17 = require('./ssb/user/resolver');

var _resolver18 = _interopRequireDefault(_resolver17);

var _resolver19 = require('./mutation/resolver');

var _resolver20 = _interopRequireDefault(_resolver19);

var _resolver21 = require('./subscription/resolver');

var _resolver22 = _interopRequireDefault(_resolver21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  AboutMessage: _resolver2.default,
  Channel: _resolver4.default,
  ChannelMessage: _resolver6.default,
  ContactMessage: _resolver8.default,
  DefaultMessage: _resolver10.default,
  Message: _resolver12.default,
  PostMessage: _resolver14.default,
  Query: _resolver16.default,
  User: _resolver18.default,
  Mutation: _resolver20.default,
  Subscription: _resolver22.default
};