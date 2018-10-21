const defaultMessage = require('../default/resolver')

module.exports = Object.assign(
  {
    channel: (msg) => msg.value.content.channel,
    subscribed: (msg) => msg.value.content.subscribed,
  },
  defaultMessage,
)
