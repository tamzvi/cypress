describe('Automation Exercise - Signup and Delete Account Flow', () => {
  it('should signup a new user and delete the account', () => {
    // 1. Launch browser 
    //  2. Navigate to URL
    cy.visit('http://automationexercise.com');

    // 3. Verify that home page is visible successfully
    cy.get('body').should('contain.text', 'Home');

    // 4. Click on 'Signup 
  

    // / Login' button
    cy.contains(' Login').click();

    // 5. Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible');

    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type("tester");
    cy.get('[data-qa="signup-email"]').type("tamzviadi@gmail.com")

   

    // 7. Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').click();

    // 8. Verify 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains('Enter Account Information').should('be.visible');

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender1').check(); // Mr.
    cy.get('#password').type('Test@1234');
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');

    // 10. Select checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // 11. Fill remaining details
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#company').type('OpenAI');
    cy.get('#address1').type('123 Test Street');
    cy.get('#address2').type('Suite 456');
    cy.get('#country').select('India');
    cy.get('#state').type('Karnataka');
    cy.get('#city').type('Bangalore');
    cy.get('#zipcode').type('560001');
    cy.get('#mobile_number').type('9999999999');

    // 12. Click 'Create Account' button
    cy.get('button[data-qa="create-account"]').click();

    // 13. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains('Account Created!').should('be.visible');

    // 14. Click 'Continue' button
    cy.contains('Continue').click();

    // 15. Verify that 'Logged in as username' is visible
    cy.contains(`Logged in as ${name}`).should('be.visible');

    // 16. Click 'Delete Account' button
    cy.contains('Delete Account').click();

    // 17. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains('Account Deleted!').should('be.visible');

    // 18. Click 'Continue' button
    cy.contains('Continue').click();
  });
});
