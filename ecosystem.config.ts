module.exports = {
  apps: [
    {
      name: "saimum-portfoleo",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/srv/saimum-portfoleo",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
