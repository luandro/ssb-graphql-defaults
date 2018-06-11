import { getHistory, getId, getProfile, getChannels } from 'ssb-helpers';

export default {
  channels: (_, { id }, { sbot }) => getChannels({ id }, sbot),
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  profile: (_, { id }, { sbot }) => getProfile({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
}
