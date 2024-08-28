// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'Safia-react',
      script: 'npx',
      args: 'react-scripts start',
      cwd: './', // Loyihaning asosiy papkasi
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      instances: 1,
      exec_mode: 'cluster',
    },
    // {
    //   name: 'Safia-react-prod',
    //   script: 'npx',
    //   args: 'serve -s build -l 80',
    //   cwd: './', // Loyihaning asosiy papkasi
    //   env: {
    //     NODE_ENV: 'production',
    //   },
    // },
  ],
};
