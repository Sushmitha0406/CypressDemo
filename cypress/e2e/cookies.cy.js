// const { select } = require("xpath");
describe('Cookies', () => {
  beforeEach(() => {
    cy.visitURL();
  });
  it('setcookie', () => {   
    cy.get('.zUY2LC')
    .find('.o-dsiSgT').find('.o-fzptZU')
    .find('svg.o-dlrcWp').click()
    cy.get('.o-brXWGL').find('input[placeholder="Enter Your Email Id"]')
    .type('sushmitha@gmail.com')
    .then(()=>
    {
      const userEmail = 'sushmitha@gmail.com'
      cy.setCookie('user_email', userEmail)
      cy.reload()
      cy.getCookie('user_email').should('exist').and('have.property', 'value', 'sushmitha@gmail.com');
      cy.clearCookie('user_email')
      cy.reload();
      cy.getCookie('user_email').should('not.exist');
    })
  });
})
