context('404 Error Page', function() {

  beforeEach( function() {
    cy.visit('/');
  });

  it('displays an apology for an unfound page', function() {
    cy.visit('/abcde', {failOnStatusCode: false});
    cy.contains('body', 'The page you are trying to access does not exist.');
  });

});
