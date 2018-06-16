import { getHistory, getId, getAbout, getChannels, getBlob } from '../../../ssb-helpers'

export default {
  channels: (_, { id }, { sbot }) => getChannels({ id }, sbot),
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  about: (_, { id }, { sbot }) => getAbout({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
  blob: (_, { hash }, { sbot }) => {
    return getBlob(sbot, hash)
      .then(blob => {
        return {
          id: hash,
          stringified: JSON.stringify(blob)
        }
      })
  },
}
