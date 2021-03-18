const executeCommand = require('./utils');

/*eslint max-len: ["error", { "code": 160 }]*/
const getCommandString = (message, targetPath) =>
  `git --git-dir=${targetPath}/.git --work-tree=${targetPath} add --all && git --git-dir=${targetPath}/.git --work-tree=${targetPath} commit -m '${message}'`;

const Commit = (targetPath, options, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = null;
  }

  options = options || {};
  const command = getCommandString(options.message, targetPath);

  if (options.debug) {
    console.log(command);
  }

  executeCommand(command, targetPath, (err) => {
    if (err) {
      callback(new Error('Failed with status ' + err));
      return;
    }
    console.log('Success');
    callback();
  });
};

module.exports = Commit;
