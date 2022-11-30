describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')

    cy.get('.ms-auto > .nav-item > .nav-link').click()
    cy.get('.forgot').click()
    cy.get('#name').type("Rafli Alfian Nilofar")
    cy.get('#phone').type("samsungn")
    cy.get('#email').type("rafli@gmail.com")
    cy.get('#password').type("123456789")
    cy.get('.btn').click()
  })
})