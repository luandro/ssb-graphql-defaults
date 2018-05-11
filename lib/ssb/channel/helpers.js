'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannels = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _pullStream = require('pull-stream');

var _pullStream2 = _interopRequireDefault(_pullStream);

var _helpers = require('../message/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getChannels = exports.getChannels = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref, sbot) {
    var id = _ref.id;
    var msgs;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _helpers.getHistory)({ id: id }, sbot);

          case 2:
            msgs = _context.sent;
            return _context.abrupt('return', (0, _keys2.default)(msgs).map(function (key) {
              return msgs[key];
            }).filter(function (msg) {
              return msg.value.content.type === 'channel';
            }).reduce(function (channels, msg) {
              var _msg$value$content = msg.value.content,
                  channel = _msg$value$content.channel,
                  subscribed = _msg$value$content.subscribed;

              return [].concat((0, _toConsumableArray3.default)(channels), [{ name: channel, subscribed: subscribed }]);
            }, []));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getChannels(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();