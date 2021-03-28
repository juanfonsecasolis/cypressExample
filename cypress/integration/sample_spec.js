describe('My First Test', () => {
	it('Visit the Blood Pressure and Pulse Visualizer', () => {
		cy.visit('https://bloodpressurepulse.herokuapp.com/demo')
		cy.contains('User profile: Franklin_Chang.csv').click()
		cy.get('#output-cloud > details:nth-child(1) > div:nth-child(2) > a:nth-child(1)')
			.should('have.text','demo/Franklin_Chang.csv')
	})
})

