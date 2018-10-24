const { message, publish } = require('ssb-helpers')
const DefaultMessage = require('./default/resolver')
const { PostMessage, publishPost} = require('./post/resolver')

const messageTypeMap = {
  // about: 'AboutMessage',
  // channel: 'ChannelMessage',
  post: 'PostMessage',
}

module.exports = {
  Message: {
    __resolveType: (obj) => {
      if (obj.value) {
        return messageTypeMap[obj.value.content.type] || 'DefaultMessage'
      } else {
        throw 'Message not on the right format!'
      }
    }
  },
  DefaultMessage,
  PostMessage,
  message: async (_, { id }, { sbot }) => {
    try {
      const msg = await message({ id }, sbot)
      console.log('here goes, ', msg)
      return msg
    } catch (err) { throw err }
  },
  publish: async (_, { input: { type, content } }, { sbot }) => {
    let parsedContent
    // Check if is validjson
    if (/^[\],:{}\s]*$/.test(content.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    } else {
      const doubleQuotesContent = content.replace(/'/g, '"')
      parsedContent = JSON.parse(doubleQuotesContent)
    }
    const formatedContent = Object.assign({ type }, parsedContent)
    try {
      const published = await publish(formatedContent, sbot)
      return published
    } catch (err) { throw err }
  },
  publishPost,
}