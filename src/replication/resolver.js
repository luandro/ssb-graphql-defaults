const { replication } = require('ssb-helpers')

module.exports = {
  replication: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const channel = 'replication'
      replication(sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    }
  },
}