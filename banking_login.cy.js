describe('Banking Login Workflow', () => { 
  it('should login successfully with valid credentials', () => { 
    // Step 1: Visit demo banking site 
    cy.visit('[demo.testfire.net](http://demo.testfire.net/login.jsp)') 
    // Small delay to allow page load
    cy.wait(1000)
    // Step 2: Enter username 
    cy.get('input[name="uid"]').type('jsmith', { delay: 100 }) 
    // Step 3: Enter password 
    cy.get('input[name="passw"]').type('demo1234', { delay: 100 }) 
    cy.wait(500)
    // Step 4: Click login 
    cy.get('input[type="submit"]').click()
    // Wait for navigation or new page load
    cy.wait(1500)
    // Step 5: Verify welcome message 
    cy.contains('Hello John Smith').should('be.visible') 
  }) 
})