/// <reference types="cypress" />

const larguras = [1200, 1090]

larguras.forEach(largura => {

    context.skip("Landing Page", () => {

        beforeEach(() => {
            cy.visit('/');
            cy.viewport(largura, 900)
            cy.log('Largura: ', largura)
        });
        it("Navegar para o cadastro de aula", () => {
            cy.get('div a.give-classes').click();
            cy.url().should('contain', 'give-classes')
        });
        it("Navegar para pesquisa de professor", () => {
           cy.get('div a.study').click();
           cy.url().should('contain', 'study')
        });
    });

});

