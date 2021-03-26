const gitClone = require("./src/git-clone");
const gitCommit = require("./src/git-commit");
const gitConfig = require("./src/git-config");
const gitPush = require("./src/git-push");
const gitStatus = require("./src/git-status");

module.exports = {
  clone: gitClone,
  commit: gitCommit,
  config: gitConfig,
  push: gitPush,
  status: gitStatus,
};
