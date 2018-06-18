import { getHistory, getId, getAbout, getChannels, getBlob } from 'ssb-helpers'

export default {
  channels: (_, { id }, { sbot }) => getChannels({ id }, sbot),
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  about: (_, { id }, { sbot }) => getAbout({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
  blob: (_, { hash }, { sbot, path }) => {
    return getBlob(sbot, hash)
      .then(blob => {
        const formatedHash = hash.split('.sha256').shift().split('').slice(1).join('')
        console.log('formatedHash', formatedHash)
        const hex = new Buffer('formatedHash', 'base64').toString('hex')
        console.log("hex", hex)
        const dir = imageHex.substring(0,2)
        const file = imageHex.substring(2)
        const blobPath = `${path.ssbPath}/blobs/sha256/${dir}/${file}`
        console.log('blobPath'. blobPath)
        return {
          id: hash,
          hex,
          path: blobPath
        }
      })
      .catch(err => err)
  },
}
