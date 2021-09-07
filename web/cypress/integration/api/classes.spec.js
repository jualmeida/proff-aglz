/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api"/>

context("Classes endpoint", () => {
	//Request URL: http://localhost:3333/classes - POST
	it("POST - Cadastrar um novo professor", () => {

		cy.api({
			method: 'POST',
			url: `${Cypress.config().apiUrl}/classes`,
			body: {
				"name":"Teste",
				"avatar":"https://pickaface.net/gallery/avatar/unr_fake_190524_1549_9fgji7.png",
				"whatsapp":"71998999999",
				"bio":"fsdfds",
				"subject":"Matemática",
				"cost":10000,
				"schedule":[
				  {
					"week_day":0,
					"from":"19:00",
					"to":"20:00"
				  }
				]
			}
		}).then((response) => {
			//asserções da resposta
			expect(response.status).to.eq(201)
			expect(response.body).to.not.be.null
			expect(response.body).to.have.property('schedule','class_id')

			
			}) 

		
		})
});