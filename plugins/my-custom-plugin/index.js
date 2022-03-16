require("dotenv").config();

module.exports = {
  onPreBuild: async ({ constants, inputs, netlifyConfig, utils }) => {
     await run.command("ls");
  },
};
