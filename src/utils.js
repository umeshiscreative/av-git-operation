const process = require("child_process");

const executeCommand = (command, targetPath, callback) => {
  let dst = targetPath;

  process.exec(command, { cwd: dst }, (err, stdout, stderr) => {
    if (err) {
      callback(
        new Error("[Utils(err)] Failed with status in error " + err + stderr)
      );
      return;
    }
    callback(null, stdout);
  });
};

module.exports = executeCommand;
