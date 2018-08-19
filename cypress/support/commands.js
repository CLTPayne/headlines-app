const exampleMock = require('../fixtures/headlinesPageOne.json');

Cypress.Commands.add('useMocks', function() {
  cy.server({ matchBase: false });
  cy.route('POST', 'http://api.ft.com/content/search/v1', 'fixture:headlinesPageOne.json');
});

Cypress.Commands.add('searchWord', function() {
  cy.get('form input:first').type('Brexit');
  cy.get('.form-inline > .o-buttons').click();
});
