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

var enableGeoLocation = document.getElementById("enableGeoLocation");
var message = document.getElementById('message');
var contactNumber = document.getElementById('contact-number');
var sendMessage = document.getElementById('sendMessage');

var x = document.getElementById("demo");

var coordinatesValue;


sendMessage.onclick = function () {
  if (message.value !== '' && contactNumber.value !== '') {
    // console.log(message, contactNumber);
    document.querySelector('p.alert').style.display = 'none';

    getLocation();
    fetchNumberAndMessage(); 
  }
  else {
    document.querySelector('p.alert').style.display = 'block';
  }
};


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

  coordinatesValue = latitude + "," + longitude;

  coordinates.value = coordinatesValue;
}

function fetchNumberAndMessage() {
  var contactNumber = "+91" + document.getElementById("contact-number").value;

  var message = document.getElementById("message").value;

  sendWhatsAppMessage(contactNumber, message);
}

function sendWhatsAppMessage(contactNumber, message) {
  var link = document.getElementById("sendLink");

  var googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${coordinatesValue}`;

  console.log(googleMapsLink);

  link.setAttribute(
    "href",
    `https://api.whatsapp.com/send?phone=${contactNumber}&text=${message}. Click to see my location:- ${googleMapsLink}`
  );

  console.log(link);

  // var whatsAppBTN = document.getElementById("sendMessage");
  // whatsAppBTN.click();
}