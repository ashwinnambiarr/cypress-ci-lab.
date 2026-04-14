describe('Banking Login Workflow', () => { 
it('should login successfully with valid credentials', () => { 
// Step 1: Visit demo banking site 
cy.visit('http://demo.testfire.net/login.jsp') 
// Step 2: Enter username 
cy.get('input[name="uid"]').type('jsmith') 
// Step 3: Enter password 
cy.get('input[name="passw"]').type('demo1234') 
// Step 4: Click login 
cy.get('input[name="btnSubmit"]').click() 
// Step 5: Verify welcome message 
cy.contains('Hello John Smith').should('be.visible')
// Step 6: Visit demo teller dashboard (mock banking site) 
cy.visit('http://demo.testfire.net/bank/main.jsp') 
// Step 7: Navigate to transfer requests page 
cy.contains('Transfer Funds').click() 
// Step 8: Select account and enter transfer details 
cy.get('select[name="fromAccount"]').select('800002') // Savings 
cy.get('select[name="toAccount"]').select('800003')   // Checking 
cy.get('input[id="transferAmount"]').type('100') 
// Step 9: Submit transfer 
cy.get('input[id="transfer"]').click() 
// Step 10: Verify confirmation message 
cy.contains('successfully transferred').should('be.visible') 
// Step 11: Verify updated balance is displayed 
//cy.contains('Balance').should('exist')  
}) 
})
