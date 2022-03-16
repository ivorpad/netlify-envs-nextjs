module.exports = {
  onPreBuild: ({ constants, inputs, netlifyConfig }) => {
    netlifyConfig.build.environment.API_KEY = "changed from build";
  },
};
