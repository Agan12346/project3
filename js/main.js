function initMap() {
  var myLatLng = { lat: -34.397, lng: 150.644 };  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Biggest Wonder!',
    icon: {
        url: '../media/image/icon.png',
        size: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(16, 32)
    }
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Wonder 1</h3><p>Some pretty location 1.</p>',
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Wonder 2</h3><p>Some pretty location 2.</p>'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
    title: 'More details'
  });
  
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  var locations = [
    { lat: -34.562, lng: 150.762, title: 'Random Location 1' },
    { lat: -34.247, lng: 150.539, title: 'Random Location 2' },
    { lat: -34.119, lng: 150.814, title: 'Random Location 3' }
  ];

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: location.title
    });

    marker.addListener('click', function() {
      map.setCenter(marker.getPosition());
      map.setZoom(8);
    })
  })
}
