import { getProfile } from 'ssb-helpers'
import DefaultMessage from '../default/resolver';

export default {
  ...DefaultMessage,
  contact: (msg, { sbot }) => getProfile({ id: msg.value.content.contact }, sbot),
  following: (msg) => msg.value.content.following,
}
