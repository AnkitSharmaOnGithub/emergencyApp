// Email.send({
//   Host: "smtp.yourisp.com",
//   Username: "username",
//   Password: "password",
//   To: "them@website.com",
//   From: "you@isp.com",
//   Subject: "This is the subject",
//   Body: "And this is the body"
// }).then(message => alert(message));

// Email.send({
//   SecureToken: "51b7e84a-2a65-4c25-ad28-a326dc097768",
//   To: "ankits@digitizebrand.com",
//   From: "email_testing@digitizebrand.com",
//   Subject: "This is the subject",
//   Body: "And this is the body"
// }).then(message => alert(message));

var button = document.getElementById("button");

button.onclick = function() {
  var x = document.getElementById("demo");

  getLocation();

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;

    setCoordinates(position.coords.latitude, position.coords.longitude);
  }

  function setCoordinates(latitude, longitude) {
    var coordinates = document.getElementById("coordinates");

    var coordinatesValue = latitude + "," + longitude;

    coordinates.value = coordinatesValue;

    fetchNumberAndMessage();
  }

  function fetchNumberAndMessage() {
    var contactNumber = document.getElementById("contact-number").value;

    var message = document.getElementById("message").value;

    sendWhatsAppMessage(contactNumber, message);
  }

  function sendWhatsAppMessage(contactNumber, message) {
    var link = document.getElementById("sendLink");
    link.setAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=${contactNumber}&text=${message}`
    );

    var whatsAppBTN = document.getElementById("sendMessage");
    whatsAppBTN.click();
  }
};
