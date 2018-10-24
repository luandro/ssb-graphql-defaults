const { gossip, peers } = require('ssb-helpers')

module.exports = {
  peers: async (_, {}, { sbot }) => {
    return peers(sbot)
  },
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { connected } = args
      const channel = 'gossip'
      gossip(sbot, pubsub, channel, connected)
      return pubsub.asyncIterator(channel)
    },
  },
}