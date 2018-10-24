const { blob, blobRemove, blobsList, blobChanges } = require('ssb-helpers')

module.exports = {
  blob: async (_, { hash }, { sbot, paths }) => {
    const res = await blob(sbot, hash, paths)
    return res

  },
  blobRemove: async (_, { hash }, { sbot, paths }) => {
    const res = await blobRemove(sbot, hash, paths)
    console.log('BLobbbo', res)
    return res

  },
  blobsList: {
    resolve: (payload) => {
      console.log('payload', payload)
      return {
        key: 'heya'
      }
    },
    subscribe: (parent, args, { pubsub, sbot, paths }) => {
      const channel = 'blobsList'
      blobsList(sbot, pubsub, channel, paths)
      return pubsub.asyncIterator(channel)
    }
  },
  blobsChanges: {
    subscribe: (parent, args, { pubsub, sbot, paths }) => {
      const channel = 'blobsChanges'
      blobChanges(sbot, pubsub, channel, paths)
      return pubsub.asyncIterator(channel)
    }
  },
}