describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should render landing page logo', () => {
    cy.get('img').should('be.visible');
  })
  it('should redirect if JWT is found in local storage', () => {
    cy.login()
    cy.url().should('include', 'http://localhost:3000/modules');
  })
})