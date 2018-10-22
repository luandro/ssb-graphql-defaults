const { message, publish } = require('ssb-helpers')
const DefaultMessage = require('./default/resolver')
const PostMessage = require('./post/resolver')

const typeMap = {
  about: 'AboutMessage',
  channel: 'ChannelMessage',
  post: 'PostMessage',
}

module.exports = {
  Message: {
    __resolveType: (obj) => typeMap[obj.content.type] || 'DefaultMessage'
  },
  DefaultMessage,
  PostMessage,
  message: async (_, { id }, { sbot }) => {
    try {
      let msg = await message({ id }, sbot)
      msg.key = id
      return msg
    } catch (err) { throw err }
  },
  publish: async (_, { input: { content: { type, data } } }, { sbot }) => {
    formatedContent.type = type
    try {
      const published = await publish(formatedContent, sbot)
      return published
    } catch (err) { throw err }
  },
  publishPost: async (_, { text }, { sbot }) => {
    const publishContent = {
      type: 'post',
      text
    }
    try {
      const published = await publish(publishContent, sbot)
      const { key, value: { content, sequence, timestamp, author }} = published
      return {
        key,
        content,
        sequence,
        timestamp,
        type: content.type,
        author,
      }
    } catch (err) { throw err }
  }
}