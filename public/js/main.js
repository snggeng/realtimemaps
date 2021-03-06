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

  socket.emit('newUser', current)
}

function locationError () {
  console.log('Cound not get location')
}

// Get user location
function initMap () {
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError)
}

$(document).ready(function () {
  socket = io.connect(window.location.href)

  socket.on('broadcast', function (data) {
    console.log(data)

    var msg = $('<div>').text(data)
    $('#chat').append(msg)
  })

  $('#chat button').on('click', function (e) {
    e.preventDefault()
    var message = $('#chat input').val()
    socket.emit('newMessage', message)
    $('#chat input').val('')
  })
})
