Cypress.Commands.add('login', () => {
	cy.log('Logging in to Google')
	cy.request({
		method: 'POST',
		url: 'https://www.googleapis.com/oauth2/v4/token',
		body: {
			grant_type: 'refresh_token',
			client_id: Cypress.env('googleClientId'),
			client_secret: Cypress.env('googleClientSecret'),
			refresh_token: Cypress.env('googleRefreshToken'),
		},
	}).then(({ body }) => {
		const { access_token, id_token } = body

		cy.request({
			method: 'GET',
			url: 'https://www.googleapis.com/oauth2/v3/userinfo',
			headers: { Authorization: `Bearer ${access_token}` },
		}).then(({ body }) => {
			cy.log(body)
			const userItem = {
				token: id_token,
				user: {
					googleId: body.sub,
					email: body.email,
					givenName: body.given_name,
					familyName: body.family_name,
					imageUrl: body.picture,
				},
			}

			window.localStorage.setItem('auth', id_token)
			cy.visit('/modules')
		})
	})
})