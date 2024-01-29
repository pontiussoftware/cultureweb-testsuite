const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gztwh7",
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
