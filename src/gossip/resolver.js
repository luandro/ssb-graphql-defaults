const { gossip } = require('ssb-helpers')

module.exports = {
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { connected } = args
      const channel = 'GOSSIP'
      gossip(sbot, pubsub, channel, connected)
      return pubsub.asyncIterator(channel)
    },
  },
}