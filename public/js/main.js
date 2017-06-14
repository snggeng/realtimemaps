$(document).ready(function () {

})

function locationSuccess (position) {
  console.log('Location success')
  var current = {lat: position.coords.latitude, lng: position.coords.longitude}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: current
  })

  var marker = new google.maps.Marker({
    position: current,
    map: map
  })
}

function locationError () {
  console.log('Cound not get location')
}

function initMap () {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError)

  /*
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  */
}
