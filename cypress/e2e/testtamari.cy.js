describe("test case1:registration", () => {
  beforeEach(() => {
  cy.visit ("https://www.automationexercise.com/")
  })

  it('registration whith correct data', () => {
    
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.get('[data-qa="signup-name"]').type('tamzvi')
  cy.get('[data-qa="signup-email"]').type('tamddd@gmail.com')
  cy.get('[data-qa="signup-button"]').click
cy.get('[data-qa="signup-button"]').click()
cy.get('[data-qa="password"]').type('12456978') 
cy.get('form > .title > b').should('have.text', 'Address Information') 
cy.get('[data-qa="first_name"]').type('tam')
cy.get('[data-qa="last_name"]').type('tam')
cy.get('[data-qa="company"]').type('tnt')
cy.get('[data-qa="address"]').type('tbilisi')
cy.get('[data-qa="address2"]').type('gogo')
//cy.get('[data-qa="country"]').type('india')
cy.get('[data-qa="state"]').type('usa')
cy.get('[data-qa="city"]').type('tbilisi')
cy.get('[data-qa="zipcode"]').type('245')
cy.get('[data-qa="mobile_number"]').type('456544444')
cy.get('[data-qa="create-account"]').click()
cy.get('[data-qa="continue-button"]').click()
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

})

//Shemowmeba rom daloginda

  })


it('registration whith uncorrect email', () => {
    cy.visit("https://www.automationexercise.com/")
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.get('[data-qa="signup-name"]').type('tamzvi')
  cy.get('[data-qa="signup-email"]').type('tam@gmail.com')
  cy.get('[data-qa="signup-button"]').click
cy.get('[data-qa="signup-button"]').click()
//Shemoweba rom  ar daloginda
})

Cypress.Commands.add('login', (email, password) => { 

})

describe ("test case2:login with correct pssword an email", () => {
  beforeEach("",() => {
  cy.visit ("https://www.automationexercise.com/");
  })
  it("registration with correct user and password",()=>{
    cy.login("tamdddd@gmail.com","1245678")
    });
  });

  describe ("test case2:login with incorrect pssword an email", () => {
  beforeEach("",() => {
  cy.visit ("https://www.automationexercise.com/");
  })
  it("registration with incorrect user and password",()=>{
    cy.login("tamddyd@gmail.com","124678")
    });
  });
  //Test Case 4: Logout User
describe ("test case3:logout user", () => {
  beforeEach("",() => {
  cy.visit ("https://www.automationexercise.com/");
  })
  it("logout user",()=>{
    cy.login("tamddyd@gmail.com","124678")
    cy.get('[data-qa="signup-button"]').click()

    });
  });
  //Test Case 5: Register User with existing email
  describe("test case1:registration", () => {
  beforeEach(() => {
  cy.visit ("https://www.automationexercise.com/")
  })

  it('registration whith  existing email', () => {
    
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  cy.get('[data-qa="signup-name"]').type('tamzvi')
  cy.get('[data-qa="signup-email"]').type('tamddd@gmail.com')
  cy.get('[data-qa="signup-button"]').click
cy.get('[data-qa="signup-button"]').click()
 });
  });

