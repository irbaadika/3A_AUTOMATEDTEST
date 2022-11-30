describe('Create', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('.ms-auto > .nav-item > .nav-link').click()
    cy.get('#email').type('admin@gmail.com')
    cy.get('#password').type('password')
    cy.get('.btn').click()
    cy.get(':nth-child(7) > [data-bs-toggle="collapse"] > .menu-title').click()
    cy.get(':nth-child(7) > :nth-child(3) > .nav').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    // cy.get('.navbar-menu-wrapper').click({force:true})
    cy.get('#title').type("Flutter")
    
    
    cy.get('#deskripsi').type('Pemrograman Mobile')
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('#requirment').type('Pemrograman Mobile Dasar')
    cy.get('#outcome').type('Membuat Aplikasi Mobile')
    cy.get('#harga').type('200000')
    cy.get('.btn').click()
  })
})

