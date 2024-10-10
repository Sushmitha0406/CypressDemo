// car as class
const Car = {
  create: function(brand, model) {
    return {
      brand: brand,
      model: model,
      start: function() {
        cy.log(`Starting ${this.brand} ${this.model}`);
      },
      stop: function() {
        cy.log(`Stopping ${this.brand} ${this.model}`);
      }
    };
  }
};

describe('Car Tests', () => {
  it('should create and operate cars', () => {
    // Create instances of cars
    const car1 = Car.create("Tata", "Nexon");
    const car2 = Car.create("Honda", "City");

    car1.start();
    car2.start();
    car1.stop();
    car2.stop();
  });
  it('date objects', () => {
    const currentDate = new Date(); 
    cy.log(`${currentDate}`)
    const specificDate = new Date('2024-04-28T12:00:00');
    cy.log(`${specificDate}`) 
    const dateString = currentDate.toDateString(); 
    cy.log(`${dateString}`)
    const timeString = currentDate.toLocaleTimeString(); 
    cy.log(`${timeString}`)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    cy.log(`${tomorrow}`)
  });
});
