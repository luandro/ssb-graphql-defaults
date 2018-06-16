'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./ssb/message/about/type');

var _type2 = _interopRequireDefault(_type);

var _type3 = require('./ssb/channel/type');

var _type4 = _interopRequireDefault(_type3);

var _type5 = require('./ssb/message/channel/type');

var _type6 = _interopRequireDefault(_type5);

var _type7 = require('./ssb/message/contact/type');

var _type8 = _interopRequireDefault(_type7);

var _type9 = require('./ssb/message/default/type');

var _type10 = _interopRequireDefault(_type9);

var _type11 = require('./ssb/message/type');

var _type12 = _interopRequireDefault(_type11);

var _type13 = require('./ssb/message/post/type');

var _type14 = _interopRequireDefault(_type13);

var _type15 = require('./ssb/user/type');

var _type16 = _interopRequireDefault(_type15);

var _type17 = require('./ssb/blob/type');

var _type18 = _interopRequireDefault(_type17);

var _type19 = require('./query/type');

var _type20 = _interopRequireDefault(_type19);

var _type21 = require('./mutation/type');

var _type22 = _interopRequireDefault(_type21);

var _type23 = require('./subscription/type');

var _type24 = _interopRequireDefault(_type23);

var _type25 = require('./ssb/gossip/type');

var _type26 = _interopRequireDefault(_type25);

var _type27 = require('./ssb/progress/type');

var _type28 = _interopRequireDefault(_type27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = function Schema() {
  return ['\n  schema {\n    query: Query\n    mutation: Mutation,\n    subscription: Subscription\n  }\n'];
};

exports.default = [_type2.default, _type4.default, _type6.default, _type8.default, _type10.default, _type12.default, _type14.default, _type16.default, _type18.default, _type20.default, _type22.default, _type24.default, _type26.default, _type28.default, Schema];