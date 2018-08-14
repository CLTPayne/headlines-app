context('Top headlines', function() {

  beforeEach( function() {
    cy.useMocks()
    cy.visit('/')
  })

  it('displays a site heading', function() {
    cy.contains('h1', 'Financial Headlines')
  })

  it('loads the first 20 headlines', function() {
    const headlineOne = 'Trump and the use and misuse of US sanctions'
    const headlineTwo = 'De-risking agricultural investment in Africa'
    cy.get('#headlines').contains(headlineOne).and(headlineTwo)
  })

  it('displays a primary theme for a headline', function() {
    cy.get('#headline-one').contains('US politics & policy')
  })

  it('displays a subheading for a headline', function() {
    const subheadingOne = 'Penalties should be imposed judiciously and co-ordinated with allies'
    cy.get('#headline-one').contains(subheadingOne)
  })

})
