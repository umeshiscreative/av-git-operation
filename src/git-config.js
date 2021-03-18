const executeCommand = require('./utils');

/*eslint max-len: ["error", { "code": 180 }]*/
const getCommandString = (email, name, targetPath) =>
  `git --git-dir=${targetPath}/.git --work-tree=${targetPath} config user.email ${email} && git --git-dir=${targetPath}/.git --work-tree=${targetPath} config user.name ${name}`;

const Config = (targetPath, options, callback) => {
  if (typeof options === 'function') {
    callback = options;
    options = null;
  }

  options = options || {};

  const command = getCommandString(options.email, options.name, targetPath);

  if (options.debug) {
    console.log(command);
  }

  executeCommand(command, targetPath, (err) => {
    if (err) {
      callback(new Error('Failed with status ' + err));
      return;
    }
    callback();
  });
};

module.exports = Config;
