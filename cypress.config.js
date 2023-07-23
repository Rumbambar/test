const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  
  e2e: {

    baseUrl: 'https://rozetka.com.ua/ua/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }

  },
});
