import { getConnectedPeers, getProgress, getHistoryStream } from 'ssb-helpers'

export default {
  history: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { id, sequence } = args
      const channel = Math.random().toString(36).substring(2, 15)
      getHistoryStream({ id, sequence }, sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    },
  },
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { connected } = args
      const channel = 'GOSSIP'
      getConnectedPeers(sbot, pubsub, channel, connected)
      return pubsub.asyncIterator(channel)
    },
  },
  progress: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const channel = 'PROGRESS'
      getProgress(sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    },
  },
}