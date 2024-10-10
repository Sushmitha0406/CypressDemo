describe('CarWale Compare Cars', () => {
  beforeEach(() => {
    cy.visitURL();
  });
  it('compare cars,fixtures,arrays,variables,strings,math,alias', () => {
    
    cy.get('div.o-eWcEwo').click()
    cy.get('div.o-dsiSgT')
      .find('div.o-cKuOoN')
      .children().eq(2).click()
    cy.get('.o-bkmzIL')
      .find('li')
      .children()
      .first()
      .trigger('mouseover')
      .wait(2000);
    cy.get('.o-cpnuEd')
      .find('div.oROWc7')
      .contains('Compare Cars')
      .click();
    cy.wait(3000);
    const cars = cy.fixture('cardetails').then((cars) => {
      cars.cars.forEach(car => {
        cy.log(`${car.brand} - ${car.model}`);
      });
      const marutiCars = cars.cars.filter(car => car.brand === "Maruti Suzuki");
      cy.log("Maruti Cars:", marutiCars);
      const carNames = cars.cars.map(car => car.carname);
      cy.log("Car Names:", carNames);
      const slicedCars = cars.cars.slice(1);
      // cy.log("Sliced Cars:", slicedCars);
      slicedCars.forEach(car => {
        cy.log(JSON.stringify(car));
      });
      const index = cars.cars.indexOf('Fronx');
      cy.log("Index of Fronx:", index);
      // Select first car for comparison
      cy.selectCar(cars.cars[0].brand, cars.cars[0].carname, cars.cars[0].type, cars.cars[0].model);
      // Select second car for comparison
      cy.selectCar(cars.cars[1].brand, cars.cars[1].carname, cars.cars[1].type, cars.cars[1].model);
    })
   
    // Click on compare cars
    cy.get('.o-fznVme').contains('Compare').click();
    cy.wait(5000);
    cy.scrollTo(0, 400);
    //getting the common specifications for comparision
    cy.get('.o-eCFISO')
      .find('li.o-dbKqqe').children()
      .contains('div.o-bTDyCI', 'Engine & Transmission')
      .scrollIntoView().click();
    let mileage
    cy.get('.Y8ovrx').find('tr[data-itemid="743"] td:nth-child(2)')
      .invoke('text').then(text => {
        mileage = text;
        cy.log(mileage);
      });
    const ceiling = Math.ceil(mileage);
    cy.log(ceiling);
    const floor = Math.floor(mileage);
    cy.log(floor);
    // comparing common feature
    let Text1;
    cy.get('.Y8ovrx')
      .find('tr[data-itemid="26"] td:nth-child(2)')
      .invoke('text')
      .then(text => {
        Text1 = text;
        cy.log('Fuel Type for 1st car ', Text1);
      });
    let Text2;
    cy.get('.Y8ovrx')
      .find('tr[data-itemid="26"] td:nth-child(3)')
      .invoke('text')
      .then(text => {
        Text2 = text;
        cy.log('Fuel Type for 2nd car ', Text2);
        expect(Text1).to.equal(Text2);
      });
    cy.get('.Y8ovrx tr[data-itemid="26"] td:nth-child(1)').invoke('text').then((textBefore) => {
      cy.wrap(textBefore).as('beforetext')
    });
    //using aliases
    cy.get('.o-frwuxB').as('parent')
      .children()
      .contains('span.o-cKuOoN', 'Hide common features').click();
    cy.get('@beforetext').then(textBefore => {
      cy.get('div[data-lab="Engine & Transmission"]').siblings().last().
      find('.Y8ovrx').find('tr > td ').contains('div', textBefore).should('not.be.visible');
    })
    cy.get('@parent')
    .children()
    .contains('span.o-cKuOoN','Highlight differences').click();    
  });
})
