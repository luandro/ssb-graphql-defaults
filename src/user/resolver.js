const { whoami } = require('ssb-helpers')

module.exports = {
  whoami: (_, obj, { sbot }) => whoami(sbot),
}