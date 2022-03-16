require("dotenv").config();

module.exports = {
  onPreBuild: async ({ constants, inputs, netlifyConfig, utils: { run } }) => {
    console.log('PREBUILD');
    await run.command("ls -a");
  },
  onPostBuild: async ({ constants, inputs, netlifyConfig, utils: { run } }) => {
    console.log('POST BUILD');
    await run.command("ls -a");
  },
};
