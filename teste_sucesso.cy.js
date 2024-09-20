describe('template spec', () => {
  it('passes', () => {
    cy.visit('prova_qa_1/index.html')

    cy.get('#nome').type('Daiane')
    cy.get('#email').type('d_eik@hotmail.com')
    cy.get('#mensagem').type('Boa tarde, tudo bem? Gostaria de realizar uma reserva') //No site não existe essa opção.
    cy.get('#contatoForm > button').click()
  })
})