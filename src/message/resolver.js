const defaultMessage = require('./default/resolver')
const { messagesByType, message, publish   } = require('ssb-helpers')

const typeMap = {
  about: 'AboutMessage',
  channel: 'ChannelMessage',
  contact: 'ContactMessage',
  post: 'PostMessage',
}
module.exports = {
  message: {
    __resolveType: (obj) => {}
  },
  messagesByType: async (_, { type }, { sbot }) => {
    try {
      const messages = await messagesByType({ type }, sbot)
      return messages
    } catch (err) { throw err }
  },
  publish: async (_, { input: { content } }, { sbot }) => {
    console.log(content.data)
    let formatedContent = JSON.parse(content.data)
    console.log('CONTENT', formatedContent)
    formatedContent.type = content.type
    try {
      const published = await publish(formatedContent, sbot)
      console.log(published)
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
  },
}

// module.exports = {
//   __resolveType: (obj) => {
//     console.log(obj)
//     typeMap[obj.value.content.type] || 'DefaultMessage'
//     return 'DefaultMessage'
//   },
// }
