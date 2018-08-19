context('Top headlines', function() {

  beforeEach( function() {
    cy.useMocks();
    cy.visit('/');
  });

  it('loads 20 headlines content blocks on page load', function() {
    cy.get('article').should('have.length', 20);
  });

  it('loads 20 headlines on page load', function() {
    cy.get('.o-teaser__heading').should('have.length', 20);
  });

  it('loads 20 headline themes on page load', function() {
    cy.get('.o-teaser__theme').should('have.length', 20);
  });

  it('displays 20 news summaries on page load', function() {
    cy.get('.o-teaser__summary').should('have.length', 20);
  });

});
