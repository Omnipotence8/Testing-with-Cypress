import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/index.php',
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
