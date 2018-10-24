const fetch = require('node-fetch')
const url = `http://localhost:4000/graphql`

module.exports = (query, variables) => {
  let body
  if (variables) body = JSON.stringify({ query, variables })
  else body = JSON.stringify({ query })
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body
  })
    .then(r => r.json())
    .then(res => res.data)
    .catch(err => console.log(err))
}