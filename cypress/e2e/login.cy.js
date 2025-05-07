describe('The Login Page', () => {
    it('successfully loads', () => {
        cy.visit('/login');
        cy.get("h1").should("contain", "Se connecter");
    })
})