const { whoami } = require('./user/resolver')
const Message = require('./message/resolver')

const Query = {
  whoami,
}

module.exports = {
  Query,
  Message,
}