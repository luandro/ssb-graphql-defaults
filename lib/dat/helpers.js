'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asd = exports.getDat = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _datNode = require('dat-node');

var _datNode2 = _interopRequireDefault(_datNode);

var _async = require('async');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// syncDat: syncs dat from hash
// setStoragePath: sets dats storage path on fs

var getDat = exports.getDat = function getDat(datHash) {
  return new _promise2.default(function (resolve, reject) {
    (0, _datNode2.default)('/joe/cat-pic-analysis', function (err, dat) {
      if (err) console.log('Error on Dat', err);
      dat.importFiles();
      dat.joinNetwork();
      console.log('My Dat link is: dat://', dat.key.toString('hex'));
    });
  });
};

var asd = exports.asd = function asd() {
  return new _promise2.default(function (resolve, reject) {
    (0, _datNode2.default)('/download/cat-analysis', {
      // 2. Tell Dat what link I want
      key: '<dat-key>' // (a 64 character hash from above)
    }, function (err, dat) {
      if (err) console.log(err);

      // 3. Join the network & download (files are automatically downloaded)
      dat.joinNetwork();
    });
  });
};

// Dat('/my-dir', {key: '<key>'}, (err, dat) => {
//   dat.joinNetwork((err) => {
//     if (err) console.log(err)

//     // After the first round of network checks, the callback is called
//     // If no one is online, you can exit and let the user know.
//     if (!dat.network.connected || !dat.network.connecting) {
//       console.error('No users currently online for that key.')
//       // process.exit(1)
//     }
//   })
// })


// // download on demand
// Dat('/my-dir', {key: '<key>', sparse: true}, function (err, dat) {
//   dat.joinNetwork()

//   // Manually download files via the hyperdrive API:
//   dat.archive.readFile('/cat-locations.txt', function (err, content) {
//     console.log(content) // prints cat-locations.txt file!
//   })
// })

// // import
// Dat('/my-data', function (err, dat) {
//   if (err) throw err

//   var progress = dat.importFiles({watch: true}) // with watch: true, there is no callback
//   progress.on('put', function (src, dest) {
//     console.log('Importing ', src.name, ' into archive')
//   })