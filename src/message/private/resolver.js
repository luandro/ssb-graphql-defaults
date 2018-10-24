const { unbox, publishPrivate } = require('ssb-helpers')

module.exports = {
  publishPrivate: async (_, { content, recipients }, { sbot }) => {
    try {
      const msg = await publishPrivate({ content, recps: recipients }, sbot)
      console.log('PRIVATE', msg)
      return msg
    } catch (err) { throw err }
  },
  publishPrivatePost: async (_, { text, recipients }, { sbot }) => {
    const publishContent = {
      type: 'post',
      text
    }
    try {
      const msg = await publishPrivate({ content: publishContent, recps: recipients }, sbot)
      console.log('PRIVATE', msg)
      return msg
    } catch (err) { throw err }
  },
  unbox: async (_, { ciphertext }, { sbot }) => {
    try {
      const msg = await unbox({ ciphertext }, sbot)
      console.log('Deciphered', msg)
      return msg
    } catch (err) { throw err }
  }
}