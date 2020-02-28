module.exports = {
  apps: {
    name: 'www.devwong.com',
    script:
      'npm run start:myproxy << /home/myproxy/.pm2/logs/www.devwong.com-out.log',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3002,
      ADMIN: 'bbyxCathy510',
      WORKPATH: '/home/myproxy',
    },
    error_file: '/home/myproxy/.pm2/logs/www.devwong.com-err.log',
    merge_logs: true,
  },
};
