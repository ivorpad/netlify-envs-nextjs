require("dotenv").config();

module.exports = {
  onPreBuild: async ({ constants, inputs, netlifyConfig, utils: { run } }) => {
      console.log('COMMENTED OUT ON PREBUILD');
     await run.command("ls");
  },
};
