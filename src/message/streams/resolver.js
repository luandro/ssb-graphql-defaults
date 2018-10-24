const { log, feed, history, messagesByType } = require('ssb-helpers')

module.exports = {
  messagesByType: async (_, { type }, { sbot }) => {
    try {
      const messages = await messagesByType({ type }, sbot)
      return messages
    } catch (err) { throw err }
  },
  messagesByType: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { type } = args
      const channel = 'messagesByType'
      messagesByType({ type }, sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    },
  },
  history: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { id, sequence } = args
      const channel = 'history'
      history({id, sequence}, sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    },
  },
  feed: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const channel = 'feed'
      feed(sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    },
  },
  log: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const channel = 'log'
      log(sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    }
  },
}