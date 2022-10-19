describe('Modules page', function() {
	beforeEach(function() {
		cy.login()
	})
	it('should load the modules page', function() {
		cy.get('h1').contains('My Modules')
	})
	it('should load the modules cards', function() {
		cy.get('div.module--list').should('be.visible')
	})
});