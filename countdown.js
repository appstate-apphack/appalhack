window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-56623245-2");

var countDownDate = new Date("2024-03-30T05:38:00.000Z").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    "See you in " +
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s!";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Welcome to AppalHack Hackathon!";
  }
}, 1000);
