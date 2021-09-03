module.exports = {
  apps: [
    {
      name: "Server",
      script: "./server/index.js",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
