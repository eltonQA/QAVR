/// <reference types="cypress" />


context('Acessar VR', () => {
  beforeEach(() => {
    cy.visit('https://www.vr.com.br/')
  })

  it('valida googleMaps', () => {
    cy.get(':nth-child(3) > .vr-quick-navigation__link').click()//Navegar até́a seção seção “Pra Voce"
    cy.location('pathname').should('eq', '/onde-aceita.htm')//Valida acesso url (/onde-aceita.htm);
    cy.get('.vr-button--negative').click()
    cy.get('[class="vr-section vr-section-map"]').should('be.visible');//Valida de map está vísivel 
    cy.screenshot ('gmapsvr')//PrintMapa
  })

})
