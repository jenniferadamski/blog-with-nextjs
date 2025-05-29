describe('Categories Page', () => {
    it('logs in, creates a new category, modify it and deletes it', () => {
        const user_email = Cypress.env('user_email');
        const user_password = Cypress.env('user_password');

        cy.visit('/login');
        cy.get('h1').should('contain', 'Se connecter');
        cy.get('input[name=email]').type(user_email);
        cy.get('input[name=password]').type(`${user_password}{enter}`);
        cy.url().should('include', '/dashboard');
        cy.get('h1').should('contain', 'Tableau de bord');

        cy.get('a').contains('Catégories').click();
        cy.url().should('contain', '/dashboard/categories');
        cy.get('h1').should('contain', 'Catégories');

        cy.get('input[name=categoryName]').type('Testing');
        cy.get('button').contains('Ajouter').click();

        cy.get('li').contains('Testing').find('a').click();
        cy.get('h1').should('contain', 'Modifier une catégorie');
        cy.get('input[name=categoryName]').type('Test');
        cy.get('button').contains('Modifier la catégorie').click();
        cy.wait(500);

        cy.get('h1').should('contain', 'Catégories');
        cy.get('li').contains('Test').find('a').click();
        cy.get('h1').should('contain', 'Modifier une catégorie');
        cy.get('button').contains('Supprimer une catégorie').click();
        cy.wait(500);
        cy.get('h1').should('contain', 'Catégories');
    })
})