// Email.send({
//   Host: "smtp.yourisp.com",
//   Username: "username",
//   Password: "password",
//   To: "them@website.com",
//   From: "you@isp.com",
//   Subject: "This is the subject",
//   Body: "And this is the body"
// }).then(message => alert(message));

Email.send({
  SecureToken: "51b7e84a-2a65-4c25-ad28-a326dc097768",
  To: "ankits@digitizebrand.com",
  From: "email_testing@digitizebrand.com",
  Subject: "This is the subject",
  Body: "And this is the body"
}).then(message => alert(message));
