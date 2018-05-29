import { getConnectedPeers } from '../ssb/gossip/helpers'
import { getProgress } from '../ssb/gossip/helpers'
import { getHistoryStream } from '../ssb/message/helpers';

export default {
  history: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { id, sequence } = args
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      getHistoryStream({ id, sequence }, sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
      // pubsub.publish('commentAdded', { commentAdded: { id: 1, content: 'Hello!' }})

    },
  },
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { connected } = args
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      getConnectedPeers(sbot, pubsub, channel, connected)
      return pubsub.asyncIterator(channel)
    },
  },
  progress: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      getProgress(sbot, pubsub, channel)
      return pubsub.asyncIterator(channel)
    },
  },
}