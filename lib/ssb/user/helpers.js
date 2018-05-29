'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProfile = exports.getId = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _helpers = require('../message/helpers');

var _helpers2 = require('../blobs/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getId = exports.getId = function getId(sbot) {
  return new _promise2.default(function (resolve, reject) {
    sbot.whoami(function (err, info) {
      if (err) {
        reject(err);
      }resolve(info.id);
    });
  });
};

var getProfile = exports.getProfile = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref, sbot) {
    var id = _ref.id;
    var msgs, profile, imgBlob, blobJson;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _helpers.getLinks)({ source: id, dest: id, rel: 'about' }, sbot);

          case 3:
            msgs = _context.sent;
            profile = (0, _keys2.default)(msgs).map(function (key) {
              return msgs[key];
            }).reduce(function (profile, msg) {
              return (0, _extends3.default)({}, profile, msg.value.content);
            }, {});
            _context.next = 7;
            return (0, _helpers2.getBlob)(sbot, profile.image);

          case 7:
            imgBlob = _context.sent;
            blobJson = (0, _stringify2.default)(imgBlob);
            return _context.abrupt('return', (0, _extends3.default)({ id: id }, profile, { imageBlob: blobJson }));

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', { id: id, name: id });

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 12]]);
  }));

  return function getProfile(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();