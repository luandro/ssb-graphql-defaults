const queriesTests = require('./query.test.js')
const mutationsTests = require('./mutation.test.js')
const mockFetch = require('./fetch')

const testUrl = () => {
  const whoami = `{
    whoami
  }`
  mockFetch(whoami)
    .then(res => {
      if (!res.whoami) {
        throw(`You don't have a GraphQL server running.`)
      }
    })
    .catch(err => {
      console.log(err)
      throw(`You don't have a GraphQL server running.`)
    })
  
}

testUrl()
queriesTests()
mutationsTests()
