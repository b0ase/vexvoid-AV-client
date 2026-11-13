// pm2 config for the mixer relay on Hetzner (deployer@b0ase-cx43), behind nginx at https://mixer.vexvoid.com.
//   rsync relay/ and mcp/ to ~/src/vexvoid-mixer-relay, then: pm2 startOrReload relay/ecosystem.config.js && pm2 save
module.exports = {
  apps: [{
    name: 'vexvoid-mixer-relay',
    script: 'relay/server.js',
    cwd: __dirname + '/..',
    env: { PORT: '8101', HOST: '127.0.0.1', PUBLIC_URL: 'https://mixer.vexvoid.com', DATA_DIR: __dirname + '/data' },
    max_memory_restart: '200M'
  }]
};
