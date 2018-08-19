context('Page Layout', function() {

  beforeEach( function() {
    cy.visit('/');
  });

  it('displays a site heading', function() {
    cy.contains('header', 'Financial Times');
  });

  it('displays a search bar', function() {
    cy.contains('form', 'Search');
  });

  it('displays a pagination menu', function() {
    cy.get('.o-buttons__pagination');
  });

  it('displays a site footer', function() {
    cy.contains('footer', 'More from the FT Group');
  });

});
