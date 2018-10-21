const { message } = require('ssb-helpers')

module.exports = async (_, { id }, { sbot }) => {
  console.log('default')
  try {
    const msg = await message({ id }, sbot)
    return {
      key: id,
      content: JSON.stringify(msg.content),
      sequence: msg.sequence,
      timestamp: msg.timestamp,
      type: msg.content.type,
      author: msg.author
    }
  } catch (err) {
    console.log('Error on message resolver', err)
  }
}
