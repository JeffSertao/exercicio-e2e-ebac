/// <reference types="cypress" />
import loginPage from "../support/page_objects/login.page";
import pedidosFluxoPage from "../support/page_objects/pedidosFluxo.page";
import produtoPage from "../support/page_objects/produto.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

  


  beforeEach(() => {
      cy.visit('minha-conta')
  });
  after(() => {
      cy.screenshot()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      loginPage.EfetuarLogin()
      produtoPage.AdicionarCarrinho()
      pedidosFluxoPage.PreencherCheckout('fulano', 'Silva', 'Bate Papo', 'Brasil', 'Avenida Morumbi', '1', 'São Paulo', 'São Paulo', '05653-070', '7778888545','aluno_ebac@teste.com')
      cy.get('.woocommerce-notice').should('contain', 'Seu pedido foi recebido')
  });


})