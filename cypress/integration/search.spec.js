context('Search bar', function() {

  beforeEach( function() {
    cy.visit('/')
  })

  it('enables a lowercase search to be made', function() {
    cy.get('form input:first').type('brexit')
    cy.get('form input:second').click()
  })

  it('enables a sentence case search to be made', function() {
    cy.searchWord()
  })

  it('naviagtes to the search results', function() {
    cy.searchWord()
    cy.location('pathname').should('include', 'search')
  })

  it('displays the results of a search query', function() {
    cy.searchWord()
    cy.server()
    cy.fixture('searchQuery.json').as('searchQuery')
    cy.route('POST', 'http://api.ft.com/content/search/v1', 'fixture:searchQuery.json')
    cy.wait('@searchQuery')
    cy.get('#headlines').contains('Search Headline 1').and('Search Headline 2')
  })

})
