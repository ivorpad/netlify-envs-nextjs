module.exports = {
  onPreBuild: ({ constants, inputs, netlifyConfig }) => {
    netlifyConfig.build.environment.NEXT_PUBLIC_API_KEY = "changed from build";
  },
};
