const exampleMock = require('../fixtures/headlinesPageOne.json');

Cypress.Commands.add('useMocks', function() {
  cy.server({ matchBase: false })
  cy.route(/api.ft/, exampleMock)
});

Cypress.Commands.add('searchWord', function() {
  cy.get('form input:first').type('Brexit')
  cy.get('form input:second').click()
})
