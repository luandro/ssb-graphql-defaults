"use strict";

var Progress = "\n  type PendingPeer {\n    id: String\n    number: Int\n  }\n  type Progress {\n    rate: Int\n    feeds: Int\n    pendingPeers: [PendingPeer]\n    incompleteFeeds: Int\n    progress: Int\n    total: Int\n  }\n";

module.exports = function () {
  return [Progress];
};