# SSB GraphQL Defaults

GraphQL schema for Secure Scuttlebot, meant to be used as a plugin with [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server).

## Usage

Install it with `npm i -S ssb-graphql-defaults` and use it with your GraphQL server, or use it as a plugin with the [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server).

## API

### Query

##### `whoami` :white_check_mark:
Get id of the current sbot user.

##### `getMessage({ id: String })` :white_check_mark:
Get a message by its hash-id.

##### `messagesByType ({ type: String })` :white_check_mark:
Retrieve messages with a given type, ordered by receive-time.

##### `links ({ source: String, dest: String, rel: String })` :x:
Get a stream of messages, feeds, or blobs that are linked to/from an id.

- `source` (string, optional): An id or filter, specifying where the link should originate from. To filter, just use the sigil of the type you want: @ for feeds, % for messages, and & for blobs.
- `dest` (string, optional): An id or filter, specifying where the link should point to. To filter, just use the sigil of the type you want: @ for feeds, % for messages, and & for blobs.

- `rel` (string, optional): Filters the links by the relation string.

##### `relatedMessages ({ id: String, rel: String })` :x:
- `id` (MsgID): Root message, fetches messages related message to its ID.

#### blobs

##### `blob ({ id: String })` :x:
Get a blob by its ID.

##### `hasBlob ({ id: String })` :x:
Check if the blob of the given ID is stored in the DB.

##### `removeBlob ({ id: String })` :x:
Remove a blob from the store.

##### `listBlobs` :x:
List the hashes of the blobs in the DB.

##### `wantsBlob ({ id: String })` :x:
List the currently-wanted blobs' data-structures.

#### friends

##### isFollowing ({ source: String, dest: String }) :x:
Callsback true if source follows dest, false otherwise.

##### isBlocking ({ source: String, dest: String}) :x:
Callsback true if source blocks dest, false otherwise.



### Mutation
##### addMessage ({ author:, sequence:, previous: timestamp:, hash: 'sha256', signature:, content: { type:, ... } }) :x:
Add a well-formed message to the database.

- `author` (FeedID): Public key of the author of the message.
- `sequence` (number): Sequence number of the message. (Starts from 1.)
- `previous` (MsgID): Hash-id of the previous message in the feed (null for seq=1).
- `timestamp` (number): Unix timestamp for the publish time.
- `hash` (string): The hash algorithm used in the message, should always be sha256.
- `signature` (string): A signature computed using the author pubkey and the content of the message (less the signature attribute).
- `content` (object): The content of the message.
- - `type` (string): The object's type.

##### publishMessage ({ content: { type: String }}) :white_check_mark:
Construct a message using sbot's current user, and add it to the DB.

- `content` (object): The content of the message.
- - `type` (string): The object's type.

#### blobs

##### `wantBlob ({ id: String })` :x:
Begin searching the network for the blob of the given hash.

##### `addBlob ({ source: File, id: String })` :x:
Add a new blob to the DB.

### Subscription

##### feedStream () :x:
Fetch messages ordered by their claimed timestamps

##### logStream () :x:
Fetch messages ordered by the time received.

##### historyStream ({ id: String }) :x:
Fetch messages from a specific user, ordered by sequence numbers.

##### userStream ({ id: String }) :x:
Fetch messages from a specific user, ordered by sequence numbers.

- `rel` (string, optional): Filters the links by the relation string.

- gossip
- progress

#### blobs

##### `blobChanges` :x:
Listen for any newly-downloaded blobs.


## Other SSB plugins

- https://github.com/ssbc/ssb-backlinks :x:
- https://github.com/ssbc/ssb-threads :x:
- https://github.com/dominictarr/ssb-query :x:
- https://github.com/ssbc/ssb-contacts :x:
- https://github.com/ssbc/ssb-private :x: