import { getHistory } from '../ssb/message/helpers';
import { getId, getProfile } from '../ssb/user/helpers';
// import { getConnectedPeers } from '../ssb/gossip/helpers';
import { getChannels } from '../ssb/channel/helpers'

export default {
  // connectedPeers: (_, {}, { sbot }) => {
  //   return getConnectedPeers(sbot)
  //     .then(res => res)
  // },
  channels: (_, { id }, { sbot }) => getChannels({ id }, sbot),
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  profile: (_, { id }, { sbot }) => getProfile({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
}
