module.exports = {
  onPreBuild: ({ constants, inputs, netlifyConfig, ...rest }) => {
    
    console.log("------- CONTEXT", JSON.stringify(netlifyConfig, null, 2));
    console.log("------- REST", JSON.stringify(rest, null, 2));
    console.log("------- constants", constants);

    netlifyConfig.build.environment.NEXT_PUBLIC_API_KEY = ``;
  },
};
