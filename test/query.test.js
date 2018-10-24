const test = require('tape')
const ref = require('ssb-ref')
const mockFetch = require('./fetch')

module.exports = () => {
  // WHOAMI
  test('should return valid sbot user id', (t) => {
    const whoami = `{
      whoami
    }`
    mockFetch(whoami)
    .then(res => {
      // console.log('res', res)
      t.equal(true, ref.isFeedId(res.whoami))
      t.end()
    })
  })
  // MESSAGE
  test('should return valid sbot message', (t) => {
    const message = `{
      message(id: "%NgcMlAco0ZKI8lIteD/LRJMHKhFZrQxJvUrXaFmEIcQ=.sha256") {
        key
        author
        ... on PostMessage {
          content {
            type
            text
          }
        }
      }
    }`
    mockFetch(message)
    .then(res => {
      // console.log('res', res)
      t.equal(true, ref.isMsgId(res.message.key))
      t.end()
    })
  })
  // BLOB
  test('should return valid sbot blob', (t) => {
    const message = `{
      blob(hash: "&A5wpgudMbWRLHLMossj1RA8XX9LLU1+wdl1yi/7Pmr8=.sha256" ) {
        key
        hex
        path
      }
    }`
    mockFetch(message)
    .then(res => {
      // console.log('res', res)
      t.equal(true, ref.isBlobId(res.blob.key))
      t.end()
    })
  })
  // PEERS
  test('should return a list of peers with valid ssb user id', (t) => {
    const peers = `{
      peers {
        key
      }
    }`
    mockFetch(peers)
    .then(res => {
      // console.log('res', res)
      t.equal(true, ref.isFeedId(res.peers[0].key))
      t.end()
    })
  })
}