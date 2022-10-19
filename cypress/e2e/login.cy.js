describe('Login page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/login');
	});
	it('should render login page', () => {
		cy.get('h1').should('be.visible');
		cy.get('h1').should('contain', 'ALMP');
		cy.get('h2').should('be.visible');
		cy.get('h2').should('contain', 'You must be logged in to access this resource.');
		cy.get('button').should('be.visible');
		cy.get('button').should('contain', 'Login');
		cy.get('button').should('have.attr', 'type', 'button');
		cy.get('button').should('have.class', 'bg-blue-700');
	})
	it('should login', function() {
		cy.login()
	});
})