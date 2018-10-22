const { blob } = require('ssb-helpers')

module.exports = {
  blob: (_, { hash }, { sbot, paths }) => {
    return blob(sbot, hash)
      .then(res => {
        console.log(res)
        const formatedHash = hash.split('.sha256').shift().split('').slice(1).join('')
        const hex = new Buffer(formatedHash, 'base64').toString('hex')
        const dir = hex.substring(0,2)
        const file = hex.substring(2)
        const blobPath = `${paths.ssbPath}/blobs/sha256/${dir}/${file}`
        return {
          id: hash,
          hex,
          path: blobPath
        }
      })
      .catch(err => err)
  },
}