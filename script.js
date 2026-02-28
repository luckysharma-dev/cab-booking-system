function calculateFare() {
  var fare = 50 + Math.floor(Math.random() * 100);
  document.getElementById("fare").innerHTML =
    "Estimated Fare: ₹ " + fare;
}

function payNow() {
  alert("Payment Successful ✅");
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation not supported");
  }
}

function showPosition(position) {
  document.getElementById("location").innerHTML =
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}