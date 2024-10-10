const { select } = require("xpath");

describe('CarWale', () => {
  beforeEach(() => {
    cy.visitURL();
  });

  it('Dropdown selection,hidden elements', () => {
    
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT').find('div.o-cKuOoN').children().eq(2).click()
    cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(3000);

    cy.get('.o-cpnuEd').find('div.oROWc7').contains('Upcoming Cars').click().wait(2000);
    // cy.get('.o-dOanIi').first().click();
    // cy.get('div.o-eWcEwo').scrollIntoView().click().wait(2000)
    cy.get('div.o-brXWGL').find('[placeholder="Select Your Make"]')
    .scrollIntoView().click({force:true});
    
    cy.get('li.o-dbKqqe').find('div.o-cpnuEd').find('div.o-bTDyCI')
    .contains('span.o-bqHweY','Tata').scrollIntoView().click();

    cy.get('div.o-brXWGL')
    .find('select').scrollIntoView().should('be.visible')
    .select('Launch Date: Sooner', { force: true });
    // cy.wait(3000)
    cy.get('ul>li')
    .find('div.o-Axhmn')
    .find('a.o-cpnuEd').first().invoke('text').then((text) => {
      const launch = text;
      cy.log(launch);
    });
  })  
  it('checkbox', () => {
    
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT').find('div.o-cKuOoN').children().eq(2).click()
    cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').wait(3000);

    cy.get('.o-cpnuEd').find('div.oROWc7').contains('Find New Cars').click().wait(2000);
    // cy.get('.o-dOanIi').first().click();
    cy.get('ul>li')
    .find('div.o-cpNAVm')
    .contains('Tata').click({force:true})

    cy.contains('More Filter').click();
    cy.get('ul>li').find('div.o-cpnuEd')
    .find('div.o-bTDyCI')
    .contains('Mileage').scrollIntoView().click();

    cy.get('div.la6Zqh')
    .find('ul').find('li.NPguPr')
    .contains('Above 20 kmpl')
    .parent()
    .find('input[type="checkbox"]').as('check');
    cy.get('@check').check();
    cy.get('@check').uncheck();
    cy.get('@check').check();
    cy.get('.o-bUVylL').find('button.o-fcaNGp').contains('Apply Changes').click()
  })
  it('tabs,child window', () => {   
    cy.get('footer.o-eMNOzL')
    .find('img.o-bXKmQE').last().click()
    cy.get('a[title="Download Android App"]')
    .invoke('removeAttr', 'target').click()
    cy.url()
    .should('include','https://play.google.com/')
    cy.go('back')
  })
  it('jquery,web tables', () => {   
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT').find('div.o-cKuOoN').children().eq(2).click()
    cy.get('.o-bkmzIL').find('li').children().first().trigger('mouseover').invoke('show');
    cy.contains('Find New Cars').click();
    cy.wait(3000)
    cy.request('/').get('ul>li')
    // .find('div.o-cpNAVm').first()
    .then(($lis) => {
      $lis.each((index, li) => {
        const divText = Cypress.$(li).find('div').text().trim();
        cy.log(divText);
      });
    });
  })
})