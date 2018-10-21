import { getChannels } from 'ssb-helpers'

export default {
  channels: (obj, args, { sbot }) => getChannels(obj, sbot),
}
