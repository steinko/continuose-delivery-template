import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('Application is started', () => {
 const url= Cypress.env('frontend_url')
  console.log(url)
  cy.visit('http://localhost:3000')
})

Then('"Hello World" is displayed', () => {
  cy.contains("Hello World")
})