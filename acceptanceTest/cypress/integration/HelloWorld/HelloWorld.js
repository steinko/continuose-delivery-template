import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('Application is started', () => {
 const url= Cypress.env('FRONTEND_URL')
  cy.visit(url)
})

Then('"Hello World" is displayed', () => {
  cy.contains("Hello World")
})