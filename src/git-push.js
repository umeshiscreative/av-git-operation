const executeCommand = require('./utils');

/*eslint max-len: ["error", { "code": 120 }]*/
const getCommandString = (targetPath, branch) =>
  `git --git-dir=${targetPath}/.git --work-tree=${targetPath} push origin ${branch}`;

const Push = (targetPath, options, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = null;
  }

  options = options || {};

  const command = getCommandString(targetPath, options.branch);

  if (options.debug) {
    console.log(command);
  }

  executeCommand(command, targetPath, (err) => {
    if (err) {
      callback(new Error('[Git Push] Error: ' + err));
      return;
    }
    callback();
  });
};

module.exports = Push;
