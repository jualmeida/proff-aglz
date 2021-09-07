/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoint', () => {
	it("GET - Obter total de conexões realizadas", () => {
		//Request URL: http://localhost:3333/connections
		// GET = 200
		cy.api({
			method: 'GET',
			url: `${Cypress.config().apiUrl}/connections`,
		}).then(response => {
			expect(response.status).to.eq(200);

			expect(response.duration).lessThan(70); ///duração seja menor q 70
			expect(response.duration).lt(70); /// abreviação de duração seja menor q 70
			expect(response.body).to.have.property('total').to.be.a('number').greaterThan(5);

			expect(response.body.total)
				.an('number')
				.satisfy(totalValue => {
					return totalValue >= 5;
				}); ///satisfy é uma função que retorna true ou false

			//Content-Type: application/json;charset=UTF-8
			expect(response.headers).to.have.property('content-type').an('string').equal('application/json; charset=utf-8');
	
		});
});
});
