describe('The Login Page', () => {
    it('successfully loads', () => {
        cy.visit('/login');
        cy.get("h1").should("contain", "Se connecter");
    })

    it('logs in a user successfully and redirect it to the dashboard', function () {
        const user_email = Cypress.env('user_email');
        const user_password = Cypress.env('user_password');

        cy.visit('/login');
        cy.get('input[name=email]').type(user_email);
        cy.get('input[name=password]').type(`${user_password}{enter}`);
        cy.url().should('include', '/dashboard');
        cy.get('h1').should('contain', 'Tableau de bord');
    })
})