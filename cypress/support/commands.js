Cypress.Commands.add(
  "meteorLogoutAndLogin",
  (email = "user@email.com", password = "pass") => {
    cy.window().then(
      ({ Meteor }) =>
        new Cypress.Promise((resolve, reject) => {
          Meteor.logout(err => {
            if (err) {
              return reject(err);
            }

            resolve();
          });
        })
    );

    cy.get(".logged-out-area").should("exist");

    cy.window().then(
      ({ Meteor }) =>
        new Cypress.Promise((resolve, reject) => {
          Meteor.loginWithPassword(
            email,
            password,
            loginError => (loginError ? reject(loginError) : resolve())
          );
        })
    );

    cy.window();
  }
);
