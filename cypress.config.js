const { defineConfig } = require("cypress");

require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
  },
  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.REACT_APP_GOOGLE_ID,
    googleClientSecret: process.env.REACT_APP_GOOGLE_SECRET
  }
});
