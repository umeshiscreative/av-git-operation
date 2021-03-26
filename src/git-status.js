const executeCommand = require("./utils");

/**
 * [`parse-status`](https://github.com/jamestalmage/parse-git-status) is used to parse the output.
 *
 */
function parseStatus(str) {
  var chunks = str.split("\0");
  var ret = [];
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];
    if (chunk.length) {
      var x = chunk[0];
      var fileStatus = {
        x: x,
        y: chunk[1],
        to: chunk.substring(3),
        from: null,
      };
      if (x === "R") {
        i++;
        fileStatus.from = chunks[i];
      }
      ret.push(fileStatus);
    }
  }
  return ret;
}

/*eslint max-len: ["error", { "code": 160 }]*/
const getCommandString = (targetPath) =>
  `git --git-dir=${targetPath}/.git --work-tree=${targetPath} status -s`;

const Status = (targetPath, options, callback) => {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  options = options || {};
  const command = getCommandString(targetPath);

  if (options.debug) {
    console.log(command);
  }

  executeCommand(command, targetPath, (err, stdout) => {
    if (err) {
      callback(new Error("Failed with status " + err));
      return;
    }
    callback(parseStatus(stdout));
  });
};

module.exports = Status;
