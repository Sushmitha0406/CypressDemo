// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

Cypress.Commands.add('visitURL', () => {
    cy.visit('https://www.carwale.com/');
    // Add any additional setup commands here
  });
  
Cypress.Commands.add('selectCar', (brand, carname, type, model) => {
    cy.get('.o-bTDyCI')
      .find('div.o-bfyaNx')
      .find('img.o-bXKmQE[title="Select Car"]')
      .eq(1)
      .click({ force: true })
      .wait(3000);
  
    cy.get('.o-cYOpxG')
      .find('ul.o-eCFISO')
      .first()
      .find(`div.o-cpnuEd[data-make="${brand}"]`)
      .click();
  
    cy.get(`li.o-fzptVd[data-model="${carname}"]`)
      .first()
      .click({ force: true });
  
    cy.get('.o-eoatGj')
      .find('label.o-frwuxB')
      .find('div.o-brXWGL')
      .find('span.o-cKuOoN')
      .contains(type)
      .click();
  
    cy.get('li.o-fznJzu')
      .find('p.o-bqHweY')
      .contains(model)
      .click();
  });
  