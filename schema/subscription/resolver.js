import { getConnectedPeers } from '../ssb/gossip/helpers'

export default {
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { connected } = args
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      getConnectedPeers(sbot, pubsub, channel, connected)
      return pubsub.asyncIterator(channel)
    },
  }
}