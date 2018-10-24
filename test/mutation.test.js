const test = require('tape')
const ref = require('ssb-ref')
const mockFetch = require('./fetch')

module.exports = () => {
  // PUBLISH
  test('should publish a new message with a valid key', (t) => {
    const publish = `
        mutation($input: publishInput!) {
          publish(input: $input) {
            ... on PostMessage {
              key
              content {
                type
                text
              }
            }
          }
        }
      `
    const variables = {
      input: {
        type: 'post',
        content: JSON.stringify({
          text: 'SSB GraphQL Test Suite'
        })
      }
    }

    mockFetch(publish, variables)
    .then(res => {
      // console.log('res', res.pub)
      t.equal(true, ref.isMsgId(res.publish.key))
      t.end()
    })
    .catch(err => console.log(err))
  })
  // PUBLISHPOST
  test('should publish a new post with a valid key and text', (t) => {
    const text = 'SSB GraphQL Test Suite'
    const publishPost = `
        mutation($text: String!) {
          publishPost(text: $text) {
            ... on PostMessage {
              key
              content {
                type
                text
              }
            }
          }
        }
      `
    const variables = {
      text
    }

    mockFetch(publishPost, variables)
    .then(res => {
      console.log('res', res)
      t.equal(text, res.publishPost.content.text)
      t.equal(true, ref.isMsgId(res.publishPost.key))
      t.end()
    })
    .catch(err => console.log(err))
  })
  // BLOBREMOVE
}