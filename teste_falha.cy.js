describe('calculadora de orcamento', () => {
  it('passes', () => {
    cy.visit('prova_qa_1/index.html')

    cy.get('#valorPassagem').type('150')
    cy.get('#numeroPessoas').type('2')
    cy.get('#diasHospedagem').type('5')
    cy.get('#dataNascimento').type('2016-12-03') //Gera um alerta de que deve-se possuir mais de 18 anos.
    cy.get('#orcamentoForm > button').click()

    cy.get('.alert').contains('Voce deve ter pelo menos 18 anos para fazer uma reserva.') //Linha de alerta que o teste irá falhar.

  
})
  })
