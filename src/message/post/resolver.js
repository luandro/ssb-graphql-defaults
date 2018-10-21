const defaultMessage = require('../default/resolver')

module.exports = Object.assign(
  {
  text: (msg) => msg.content.text,
  },
  defaultMessage,
)
