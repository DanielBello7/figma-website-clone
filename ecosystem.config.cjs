module.exports = {
  apps: [
    {
      name: 'figma-clone',
      exec_mode: 'cluster',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '200M',
      script: "serve",
      env: {
        PM2_SERVE_PATH: "dist",
        PM2_SERVE_PORT: 5500,
        PM2_SERVE_SPA: "true"
      },
    }
  ]
}
