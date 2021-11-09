/// <reference types="cypress" />



context('Acessar VR', () => {
  beforeEach(() => {
   
    cy.visit('https://www.vr.com.br/')
  })

it('clicar na seção PraVoce', () =>{
  cy.get(':nth-child(3) > .vr-quick-navigation__link').click()
  cy.location('pathname').should('eq', '/onde-aceita.htm')
  cy.get('.vr-button--negative').click()
  cy.get('#mapSection > div > div')
  //cy.get('#totalm').contains('Total:');
  cy.get('[class="vr-section vr-section-map"]').should('be.visible');
  //cy.location(search).should('mapSection')
  //cy.get('//*[@id="mapSection"]')

})
  

 
  /*it('can check off an item as completed', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

*/  
    
})
