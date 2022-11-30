describe('show', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('.ms-auto > .nav-item > .nav-link').click()
    cy.get('#email').type('admin@gmail.com')
    cy.get('#password').type('password')
    cy.get('.btn').click()
    cy.get(':nth-child(7) > [data-bs-toggle="collapse"] > .menu-title').click()
    cy.get(':nth-child(7) > :nth-child(2) > .nav').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get(':nth-child(3) > .card > .card-body > .bg-info > .menu-icon').click()
  })
})