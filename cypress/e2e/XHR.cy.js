// const { select } = require("xpath");
describe('Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });
  it('XHR,operators', () => {   
    cy.request('https://www.carwale.com/api/makepagedata/?maskingName=maruti-suzuki&cityId=105&areaId=16453&platformId=1').as('c')
    cy.get('@c').should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers')    
      expect(response.body).to.have.property('models');
        })
  })
  it('get', () => {   
    cy.request("GET", "https://www.carwale.com/api/makepagedata/?maskingName=maruti-suzuki&cityId=105&areaId=16453&platformId=1")
      .then((response) => {
        // Check if the request is successful
        if (response.status === 200) {
          expect(response.status).to.eq(200);
          expect(response).to.have.property('headers');
          expect(response).to.have.property('duration');
        } else {
          throw new Error(`Request failed with status code ${response.status}`);
        }
      })
  });
  it('post', ()=>{
    cy.request("https://www.carwale.com/api/makepagedata/?maskingName=maruti-suzuki&cityId=105&areaId=16453&platformId=1")
    // .its('body.0')
    // cy.request('POST', 'https://www.carwale.com/api/makepagedata/?maskingName=maruti-suzuki&cityId=105&areaId=16453&platformId=1/posts', {
    //      title: 'Cypress',
    //      body: 'Automation Tool',
    //})
   }) 
})
