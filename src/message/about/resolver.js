const defaultMessage = require('../default/resolver')

module.exports = Object.assign(
  {
    name: (msg) => msg.value.content.name,
  },
  defaultMessage,
)
