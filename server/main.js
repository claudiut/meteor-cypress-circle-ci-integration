import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  // code to run on server at startup
  const testUserEmail = "user@test.com";
  if (Meteor.users.find({ "emails.0.address": testUserEmail }).count() === 0) {
    Accounts.createUser({
      email: testUserEmail,
      password: "pass"
    });
  }
});
