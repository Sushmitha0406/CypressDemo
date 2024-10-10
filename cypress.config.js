const { defineConfig } = require("cypress");
const currentDate = new Date().toISOString().replace(/:/g, '-');
const reportFilename = `cypress-report-${currentDate}.html`;

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true, // Enable video recording
  videoUploadOnPasses: false, // Do not upload videos for passing tests
  videoCompression: 32, // Adjust video compression quality (optional)
  videosFolder: 'cypress/videos', // Define the folder to save the videos
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/results',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    debug: true,
    overwrite: false,
    reportFilename: reportFilename
    },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here

    },
  },
});
