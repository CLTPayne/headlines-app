context('Search bar', function() {

  beforeEach( function() {
    cy.visit('/');
  });

  it('enables a lowercase search to be made', function() {
    cy.get('form input:first').type('brexit');
    cy.get('.form-inline > .o-buttons').click();
  });

  it('enables a sentence case search to be made', function() {
    cy.searchWord();
  });

  it('naviagtes to the search results', function() {
    cy.searchWord();
    cy.location('pathname').should('include', 'search');
  });

  it('displays the results of a search query', function() {
    cy.searchWord();
    cy.contains('Brexit');
  });

});
