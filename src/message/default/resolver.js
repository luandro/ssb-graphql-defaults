
module.exports = {
  key: (msg) => msg.key,
  content: (msg) => JSON.stringify(msg.value.content),
  author: (msg) => msg.value.author,
  sequence: (msg) => msg.value.sequence,
  timestamp: (msg) => msg.value.timestamp,
  type: (msg) => msg.value.content.type,
}
