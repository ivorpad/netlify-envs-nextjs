const pluginDecrypt = require('./pluginDecrypt');
const chalk = require('chalk');

module.exports = {
  onPostBuild({ inputs: { branches }, utils: { run } }) {
    console.log("decrypting files");
     pluginDecrypt({});
    if (branches && branches.includes(process.env.BRANCH)) {
      pluginDecrypt({});
    } else if (typeof branches === "undefined") {
      pluginDecrypt({});
    } else {
      console.log(
        "branches specified",
        chalk.yellow(branches.join(" ")),
        `but our current branch is ${chalk.blue(
          process.env.BRANCH
        )}, skipping decryption`
      );
    }
  },
  async onEnd({ constants, inputs, utils: { run } }) {
    console.log("DECRIPTED?");
     await run.command("ls -a");
  }
};
