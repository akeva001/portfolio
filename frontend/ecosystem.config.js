module.exports = {
  apps: [
    {
      name: "App",
      script: "./build.js",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
