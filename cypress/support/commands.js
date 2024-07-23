Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com', {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('CheckOut', (nome, sobrenome, empresa, pais, endereco, numero, cidade , estado, cep, telefone, email) => {

    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart-content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
    cy.get('#billing_adress_1').clear().type(endereco)
    cy.get('#billing_adress_2').clear().type(numero)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#billing_email').clear().type(email)

});    

