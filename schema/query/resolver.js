import { getHistory, getId, getAbout, getChannels, getBlob } from 'ssb-helpers'

export default {
  channels: (_, { id }, { sbot }) => getChannels({ id }, sbot),
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  about: (_, { id }, { sbot }) => getAbout({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
  blob: (_, { hash }, { sbot, paths }) => {
    return getBlob(sbot, hash)
      .then(blob => {
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
