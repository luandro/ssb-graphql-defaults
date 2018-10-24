const { publish } = require('ssb-helpers')

module.exports = {
  PostMessage: {
    type: (msg) => msg.value.content.type,
    text: (msg) => msg.value.content.text,
    key: (msg) => msg.key,
    author: (msg) => msg.value.author,
    sequence: (msg) => msg.value.sequence,
    timestamp: (msg) => msg.value.timestamp,
    content: (msg) => msg.value.content,
  },
  publishPost: async (_, { text }, { sbot }) => {
    const publishContent = {
      type: 'post',
      text
    }
    try {
      const msg = await publish(publishContent, sbot)
      return msg
    } catch (err) { throw err }
  }
}