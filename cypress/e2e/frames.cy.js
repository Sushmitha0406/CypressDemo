// const { select } = require("xpath");

describe('Frames', () => {
  beforeEach(() => {
    cy.visitURL();
  });
  
  it('frames', () => {   
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT').find('div.o-cKuOoN').children().eq(2).click()
    cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(2000);
    cy.get('.o-cpnuEd').find('div.oROWc7').contains('Find New Cars').click();
    cy.get('ul>li')
    .find('div.o-cpNAVm')
    .contains('Maruti Suzuki').click({force:true})
    cy.wait(3000)
    cy.contains('Maruti Fronx').click().wait(3000)
    cy.get('iframe[title="3rd party ad content"]')
    .first()
    // .find('a#aw0')
    .click()
    cy.wait(3000)
    cy.window().then((win) => {
      if (win.openedWindows && win.openedWindows.length > 0){
      const newTab = win.openedWindows[0]; 
        cy.wrap(newTab).then((tab) => {
          tab.focus(); 
         cy.contains("Book A Test Drive Now").should('be.visible')
        });
      }
      else{
        cy.log("no new window");
      }    
    });
  })
})