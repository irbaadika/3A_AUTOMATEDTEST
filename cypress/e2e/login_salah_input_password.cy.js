describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('.ms-auto > .nav-item > .nav-link').click();
    cy.get('#email').type("admin@gmail.com");
    cy.get('#password').type("salahpassword");
    cy.get('.btn').click();
  })
})